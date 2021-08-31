import { screen } from '@testing-library/react';
import Navigation from '../Navigation';
import { renderHelper } from '../../../setupTests';

describe('<Navigation />', () => {
  beforeEach(() => {
    renderHelper(<Navigation />);
  });

  test('renders logo', () => {
    const logo = screen.getByRole('img');
    expect(logo.src).not.toBe('');
  });

  test('renders link to Home', () => {
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders link to activities', () => {
    const activitiesLink = screen.getByText(/activities/i);
    expect(activitiesLink).toBeInTheDocument();
  });

  test('renders link to sign in', () => {
    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument();
  });

  test('renders all 5 social media icons', () => {
    const socialLinks = screen.getByTestId('icons-container');
    expect(socialLinks.children.length).toBe(5);
  });
});
