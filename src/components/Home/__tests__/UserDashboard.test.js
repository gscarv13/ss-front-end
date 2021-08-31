import { screen } from '@testing-library/react';
import UserDashboard from '../UserDashboard';
import { renderHelper } from '../../../setupTests';

describe('<UserDashboard />', () => {
  test('does not render lessons scheduled when user have no booked classes', () => {
    renderHelper(<UserDashboard />);

    const dashboard = screen.getByText(/No Lesson Scheduled yet!/i);
    expect(dashboard).toBeInTheDocument();
  });
});
