import { screen } from '@testing-library/react';
import UserSchedulesTable from '../UserSchedulesTable';
import { renderHelper } from '../../../setupTests';

describe('<UserSchedulesTable />', () => {
  beforeEach(() => {
    const schedules = [
      { id: '1a2s3', date: 'today', activity: 'snowboard' },
      { id: '1a6s8', date: 'today', activity: 'ski' },
      { id: '1a0s6', date: 'today', activity: 'hiking' },
    ];
    renderHelper(<UserSchedulesTable schedules={schedules} />);
  });

  test('renders the schedules props', () => {
    const table = screen.getByText('snowboard');
    expect(table).toBeInTheDocument();
  });

  test('renders the cancel button', () => {
    const button = screen.getAllByRole('button');
    expect(button.length).toBe(3);
  });
});
