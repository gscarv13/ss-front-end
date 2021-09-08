import { screen } from '@testing-library/react';
import SignInForm from '../SignInForm';
import { renderHelper } from '../../../setupTests';

describe('<SignInForm />', () => {
  beforeEach(() => {
    renderHelper(<SignInForm />);
  });

  test('renders sign in heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('renders form', () => {
    const form = screen.getByTestId('sign-in-form');
    expect(form).toBeInTheDocument();
  });

  test('renders link to sign up', () => {
    const signUp = screen.getByText(/sign up here/i);
    expect(signUp).toBeInTheDocument();
  });
});
