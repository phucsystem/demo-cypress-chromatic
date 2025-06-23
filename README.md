# Demo Cypress Chromatic

A React TypeScript application featuring a modern login form built with Mantine UI.

## Tech Stack

- **React** 19.1.0
- **TypeScript** 4.9.5  
- **Mantine UI** 8.1.1

## Features

- ✅ Modern login form with email/password validation
- ✅ Responsive design with centered layout
- ✅ Form validation with error messages
- ✅ Success notifications
- ✅ Beautiful UI components from Mantine
- ✅ TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Form Validation

The login form includes:
- **Email validation**: Must be a valid email format
- **Password validation**: Minimum 6 characters required
- Real-time validation feedback

## Testing

This project includes comprehensive testing with **Cypress**:

### Test Types
- **E2E Tests**: Full application testing in real browser environment
- **Component Tests**: Isolated component testing with React Testing Library
- **Visual Tests**: Form validation, responsive design, and user interactions

### Test Coverage
- ✅ Login form validation (email format, password length)
- ✅ Successful login scenarios with notifications
- ✅ Remember me checkbox functionality
- ✅ Responsive design testing (mobile viewport)
- ✅ Error handling and edge cases
- ✅ Custom commands for reusable actions

### Running Tests
```bash
# Interactive mode - recommended for development
npm run cy:open

# Headless mode - for CI/CD
npm run cy:run

# Component tests only
npm run cy:component

# E2E tests with server startup
npm run test:e2e
```

## Available Scripts

### Development
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the Jest test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

### Cypress Testing
- `npm run cy:open` - Opens Cypress interactive test runner
- `npm run cy:run` - Runs Cypress tests headlessly
- `npm run cy:component` - Runs component tests only
- `npm run test:e2e` - Runs e2e tests with server startup

## Project Structure

```
src/
├── components/
│   ├── LoginForm.tsx    # Main login form component
│   └── LoginForm.cy.tsx # Component tests for LoginForm
├── App.tsx              # Root component with Mantine provider
├── index.tsx            # Application entry point
└── index.css            # Global styles

cypress/
├── e2e/
│   ├── login.cy.ts               # Basic e2e login tests
│   └── login-with-fixtures.cy.ts # Advanced tests with fixtures
├── fixtures/
│   └── users.json               # Test data for different user scenarios
├── support/
│   ├── commands.ts              # Custom Cypress commands
│   ├── component.ts             # Component testing setup
│   └── e2e.ts                   # E2E testing setup
└── cypress.config.ts            # Main Cypress configuration
```

## Dependencies

### Core
- `@mantine/core` - UI components library
- `@mantine/form` - Form handling and validation
- `@mantine/hooks` - Utility hooks
- `@mantine/notifications` - Toast notifications

### Development
- `react-scripts` - Build tools and development server
- `typescript` - Type checking
- `@types/*` - TypeScript definitions

### Testing
- `cypress` - End-to-end testing framework
- `@cypress/react` - React component testing
- `@cypress/webpack-dev-server` - Webpack integration
- `start-server-and-test` - CI/CD test automation
