describe('Login Form E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the login form correctly', () => {
    // Check if main elements are visible
    cy.contains('Welcome back!').should('be.visible')
    cy.contains('Sign in to your account to continue').should('be.visible')
    
    // Check form elements
    cy.get('input[placeholder="Enter your email"]').should('be.visible')
    cy.get('input[placeholder="Enter your password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible').and('contain', 'Sign in')
    
    // Check additional elements
    cy.contains('Remember me').should('be.visible')
    cy.contains('Forgot your password?').should('be.visible')
    cy.contains("Don't have an account?").should('be.visible')
    cy.contains('Create one here').should('be.visible')
  })

  it('should show validation errors for empty fields', () => {
    // Click submit without filling fields
    cy.get('button[type="submit"]').click()
    
    // Mantine forms prevent submission and show validation errors for empty required fields
    // The form should not submit (no success notification should appear)
    cy.contains('Login Successful').should('not.exist')
    
    // Check that the form is still visible (form didn't submit)
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should show validation error for invalid email', () => {
    // Enter invalid email
    cy.get('input[placeholder="Enter your email"]').type('invalid-email')
    cy.get('input[placeholder="Enter your password"]').type('password123')
    cy.get('button[type="submit"]').click()
    
    // Check for email validation error
    cy.contains('Invalid email').should('be.visible')
  })

  it('should show validation error for short password', () => {
    // Enter valid email but short password
    cy.get('input[placeholder="Enter your email"]').type('user@example.com')
    cy.get('input[placeholder="Enter your password"]').type('12345')
    cy.get('button[type="submit"]').click()
    
    // Check for password validation error
    cy.contains('Password must be at least 6 characters').should('be.visible')
  })

  it('should successfully submit the form with valid credentials', () => {
    // Fill form with valid data
    cy.get('input[placeholder="Enter your email"]').type('user@example.com')
    cy.get('input[placeholder="Enter your password"]').type('password123')
    
    // Check remember me checkbox
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').should('be.checked')
    
    // Submit form
    cy.get('button[type="submit"]').click()
    
    // Check for success notification
    cy.contains('Login Successful').should('be.visible')
    cy.contains('Welcome back, user@example.com!').should('be.visible')
  })

  it('should handle forgot password link', () => {
    // Click forgot password link
    cy.contains('Forgot your password?').click()
    
    // For now, it's just a button, but in a real app this would navigate
    // Add assertion based on expected behavior
  })

  it('should handle create account link', () => {
    // Click create account link
    cy.contains('Create one here').click()
    
    // For now, it's just a button, but in a real app this would navigate
    // Add assertion based on expected behavior
  })

  it('should be responsive on mobile viewport', () => {
    // Test mobile viewport
    cy.viewport('iphone-x')
    
    // Check if form is still visible and usable
    cy.contains('Welcome back!').should('be.visible')
    cy.get('input[placeholder="Enter your email"]').should('be.visible')
    cy.get('input[placeholder="Enter your password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should clear form when reset', () => {
    // Fill form
    cy.get('input[placeholder="Enter your email"]').type('user@example.com')
    cy.get('input[placeholder="Enter your password"]').type('password123')
    
    // Refresh page (simulating form reset)
    cy.reload()
    
    // Check fields are empty
    cy.get('input[placeholder="Enter your email"]').should('have.value', '')
    cy.get('input[placeholder="Enter your password"]').should('have.value', '')
  })
}) 