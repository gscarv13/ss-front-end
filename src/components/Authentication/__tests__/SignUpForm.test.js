import { screen } from '@testing-library/react';
import SignUpForm from '../SignUpForm';
import { renderHelper } from '../../../setupTests';

describe('<SignUpForm />', () => {
  beforeEach(() => {
    renderHelper(<SignUpForm />);
  });

  test('renders sign up heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('renders form', () => {
    const form = screen.getByTestId('sign-up-form');
    expect(form).toBeInTheDocument();
  });

  test('renders link back to sign in', () => {
    const signIn = screen.getByRole('link');
    expect(signIn).toBeInTheDocument();
  });
});
