import { screen } from '@testing-library/react';
import LandingPage from '../LandingPage';
import { renderHelper } from '../../../setupTests';

describe('<LandingPage />', () => {
  beforeEach(() => {
    renderHelper(<LandingPage />);
  });

  test('renders the schedules props', () => {
    const button = screen.getByText(/check it out/i);
    expect(button).toBeInTheDocument();
  });
});
