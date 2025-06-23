// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { mount } from 'cypress/react'

// Import Mantine styles for component testing
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

// Add the mount command to Cypress
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// Example component mount with Mantine provider
// Cypress.Commands.add('mountWithMantine', (component, options = {}) => {
//   return mount(
//     <MantineProvider>{component}</MantineProvider>,
//     options
//   )
// }) 