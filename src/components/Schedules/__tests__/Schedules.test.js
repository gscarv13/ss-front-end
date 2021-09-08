import { screen } from '@testing-library/react';
import Schedules from '../Schedules';
import { renderHelper } from '../../../setupTests';

const mockActivity = {
  activity_type: 'Snowboard',
  description: 'Accusamus sint id. Est et iusto. Explicabo ipsam deleniti.',
  id: '2f700db0-44ee-4c06-b916-cd20ddda7f4e',
  image: 'https://res.cloudinary.com/sdcnwco/image/upload/v1630034989/SS-API-images/snb1_humsnn.png',
  level: 'Beginner',
  title: 'L1 Raw',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    state: { activity: mockActivity },
  }),
}));

describe('<Schedules />', () => {
  beforeEach(() => {
    renderHelper(<Schedules />);
  });

  test('renders the activity\'s description', () => {
    const description = screen.getByText(/description/i);
    expect(description).toBeInTheDocument();
  });

  test('renders the calendar component', () => {
    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });
});
