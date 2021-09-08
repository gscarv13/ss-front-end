import { screen } from '@testing-library/react';
import Home from '../Home';
import { renderHelper } from '../../../setupTests';

describe('<Home />', () => {
  test('renders welcome message when user is not signed in', () => {
    renderHelper(<Home />);

    const welcome = screen.getByRole('heading');
    expect(welcome).toBeInTheDocument();
  });
});
