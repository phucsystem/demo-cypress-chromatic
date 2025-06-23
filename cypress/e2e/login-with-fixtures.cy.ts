describe('Login Form with Fixtures', () => {
  let users: any

  before(() => {
    // Load fixture data
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully with valid user from fixtures', () => {
    // Use fixture data for testing
    cy.get('input[placeholder="Enter your email"]').type(users.validUser.email)
    cy.get('input[placeholder="Enter your password"]').type(users.validUser.password)
    
    cy.get('button[type="submit"]').click()
    
    // Check for success notification
    cy.contains('Login Successful').should('be.visible')
    cy.contains(`Welcome back, ${users.validUser.email}!`).should('be.visible')
  })

  it('should login successfully with admin user', () => {
    cy.get('input[placeholder="Enter your email"]').type(users.adminUser.email)
    cy.get('input[placeholder="Enter your password"]').type(users.adminUser.password)
    
    cy.get('button[type="submit"]').click()
    
    cy.contains('Login Successful').should('be.visible')
    cy.contains(`Welcome back, ${users.adminUser.email}!`).should('be.visible')
  })

  it('should test all invalid user scenarios', () => {
    users.invalidUsers.forEach((invalidUser: any, index: number) => {
      // Clear form before each test
      if (index > 0) {
        cy.get('input[placeholder="Enter your email"]').clear()
        cy.get('input[placeholder="Enter your password"]').clear()
      }

      // Fill form with invalid data
      if (invalidUser.email) {
        cy.get('input[placeholder="Enter your email"]').type(invalidUser.email)
      }
      if (invalidUser.password) {
        cy.get('input[placeholder="Enter your password"]').type(invalidUser.password)
      }

      // Submit form
      cy.get('button[type="submit"]').click()

      // Check for appropriate error message
      if (invalidUser.error === 'Invalid email') {
        cy.contains('Invalid email').should('be.visible')
      } else if (invalidUser.error === 'Password must be at least 6 characters') {
        cy.contains('Password must be at least 6 characters').should('be.visible')
      } else if (invalidUser.error === 'Required fields') {
        // Check for required field validation
        cy.get('input[placeholder="Enter your email"]').should('have.attr', 'aria-invalid', 'true')
        cy.get('input[placeholder="Enter your password"]').should('have.attr', 'aria-invalid', 'true')
      }
    })
  })

  it('should use custom login command', () => {
    // Use the custom login command we defined
    cy.login(users.testUser.email, users.testUser.password)
    
    // Check for success
    cy.contains('Login Successful').should('be.visible')
  })

  it('should test form persistence with remember me', () => {
    cy.get('input[placeholder="Enter your email"]').type(users.validUser.email)
    cy.get('input[placeholder="Enter your password"]').type(users.validUser.password)
    
    // Check remember me
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').should('be.checked')
    
    cy.get('button[type="submit"]').click()
    
    // In a real app, this would persist login state
    cy.contains('Login Successful').should('be.visible')
  })
}) 