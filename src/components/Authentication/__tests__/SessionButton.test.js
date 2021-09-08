import { screen } from '@testing-library/react';
import SessionButton from '../SessionButton';
import { renderHelper } from '../../../setupTests';

describe('<SessionButton />', () => {
  beforeEach(() => {
    renderHelper(<SessionButton />);
  });

  test('renders sign in button', () => {
    const button = screen.getByText(/sign in/i);
    expect(button).toBeInTheDocument();
  });
});
