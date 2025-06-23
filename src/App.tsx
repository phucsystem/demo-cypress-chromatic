import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import LoginForm from './components/LoginForm';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8f9fa'
      }}>
        <LoginForm />
      </div>
    </MantineProvider>
  );
}

export default App;
