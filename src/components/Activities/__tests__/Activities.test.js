import { screen } from '@testing-library/react';
import Activities from '../Activities';
import { renderHelper } from '../../../setupTests';

describe('<Activities />', () => {
  beforeEach(() => {
    renderHelper(<Activities />);
  });

  test('renders header', () => {
    const headingElement = screen.getByText(/activities/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('readers loader during fetch', () => {
    const sliderElement = screen.getByTestId('activities-slider');
    expect(sliderElement).toBeInTheDocument();
  });
});
