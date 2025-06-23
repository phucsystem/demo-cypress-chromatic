import React from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Stack,
  Container,
  Group,
  Checkbox,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC = () => {
  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  const handleSubmit = (values: LoginFormValues) => {
    // Simulate login process
    console.log('Login attempt:', values);
    notifications.show({
      title: 'Login Successful',
      message: `Welcome back, ${values.email}!`,
      color: 'green',
    });
  };

  return (
    <Container size={1200} my={60}>
      <Title ta="center" fw={900} size="h1" mb="xs">
        Welcome back phuc 123456!
      </Title>
      <Text c="dimmed" size="lg" ta="center" mb={30}>
        Sign in to your account to continue
      </Text>

      <Paper withBorder shadow="xl" p={40} radius="md" style={{ backgroundColor: '#fafafa' }}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="xl">
            <TextInput
              label="Email Address"
              placeholder="Enter your email"
              required
              size="lg"
              radius="md"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              required
              size="lg"
              radius="md"
              {...form.getInputProps('password')}
            />

            <Group justify="space-between" mt="md">
              <Checkbox
                label="Remember me"
                size="sm"
                {...form.getInputProps('rememberMe', { type: 'checkbox' })}
              />
              <Anchor size="sm" component="button" type="button" c="blue">
                Forgot your password?
              </Anchor>
            </Group>

            <Button 
              type="submit" 
              fullWidth 
              size="lg" 
              radius="md"
              mt="xl"
              gradient={{ from: 'blue', to: 'cyan', deg: 45 }}
              variant="gradient"
            >
              Sign in
            </Button>

            <Divider label="or" labelPosition="center" my="lg" />

            <Text size="sm" ta="center" c="dimmed">
              Don't have an account?{' '}
              <Anchor size="sm" component="button" fw={500} c="blue">
                Create one here
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm; 