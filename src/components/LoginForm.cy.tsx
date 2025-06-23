/// <reference types="cypress" />
/// <reference types="@cypress/react" />
import React from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import LoginForm from './LoginForm'

// Helper function to mount component with Mantine provider
const mountWithMantine = (component: React.ReactElement) => {
  return cy.mount(
    <MantineProvider>
      <Notifications />
      {component}
    </MantineProvider>
  )
}

describe('LoginForm Component Tests', () => {
  it('renders correctly', () => {
    mountWithMantine(<LoginForm />)
    
    // Check if main elements are rendered
    cy.contains('Welcome back!').should('be.visible')
    cy.contains('Sign in to your account to continue').should('be.visible')
    cy.get('input[placeholder="Enter your email"]').should('be.visible')
    cy.get('input[placeholder="Enter your password"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'Sign in')
  })

  it('shows validation errors', () => {
    mountWithMantine(<LoginForm />)
    
    // Try to submit empty form
    cy.get('button[type="submit"]').click()
    
    // Should show validation errors
    cy.get('input[placeholder="Enter your email"]').should('have.attr', 'aria-invalid', 'true')
    cy.get('input[placeholder="Enter your password"]').should('have.attr', 'aria-invalid', 'true')
  })

  it('validates email format', () => {
    mountWithMantine(<LoginForm />)
    
    // Enter invalid email
    cy.get('input[placeholder="Enter your email"]').type('invalid-email')
    cy.get('input[placeholder="Enter your password"]').type('validpassword')
    cy.get('button[type="submit"]').click()
    
    // Should show email validation error
    cy.contains('Invalid email').should('be.visible')
  })

  it('validates password length', () => {
    mountWithMantine(<LoginForm />)
    
    // Enter short password
    cy.get('input[placeholder="Enter your email"]').type('user@example.com')
    cy.get('input[placeholder="Enter your password"]').type('123')
    cy.get('button[type="submit"]').click()
    
    // Should show password validation error
    cy.contains('Password must be at least 6 characters').should('be.visible')
  })

  it('handles form submission with valid data', () => {
    mountWithMantine(<LoginForm />)
    
    // Fill form with valid data
    cy.get('input[placeholder="Enter your email"]').type('user@example.com')
    cy.get('input[placeholder="Enter your password"]').type('password123')
    
    // Submit form
    cy.get('button[type="submit"]').click()
    
    // Should show success notification
    cy.contains('Login Successful').should('be.visible')
    cy.contains('Welcome back, user@example.com!').should('be.visible')
  })

  it('handles remember me checkbox', () => {
    mountWithMantine(<LoginForm />)
    
    // Initially unchecked
    cy.get('input[type="checkbox"]').should('not.be.checked')
    
    // Check the checkbox
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').should('be.checked')
    
    // Uncheck the checkbox
    cy.get('input[type="checkbox"]').uncheck()
    cy.get('input[type="checkbox"]').should('not.be.checked')
  })

  it('has proper form structure', () => {
    mountWithMantine(<LoginForm />)
    
    // Check form structure
    cy.get('form').should('exist')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.get('input[type="checkbox"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('displays all interactive elements', () => {
    mountWithMantine(<LoginForm />)
    
    // Check all interactive elements
    cy.contains('Forgot your password?').should('be.visible')
    cy.contains('Create one here').should('be.visible')
    cy.contains('Remember me').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })
}) 