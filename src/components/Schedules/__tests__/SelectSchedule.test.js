import { screen } from '@testing-library/react';
import SelectSchedule from '../SelectSchedule';
import { renderHelper } from '../../../setupTests';

const currentDate = new Date();

describe('<SelectSchedule />', () => {
  beforeEach(() => {
    renderHelper(<SelectSchedule
      current={currentDate}
      activityId="activity-id-test"
    />);
  });

  test('require user sign in before booking class', () => {
    const paragraph = screen.getByText(/to book a class please sign in/i);
    expect(paragraph).toBeInTheDocument();
  });
});
