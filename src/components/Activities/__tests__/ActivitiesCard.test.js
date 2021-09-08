import { screen } from '@testing-library/react';
import ActivityCard from '../ActivityCard';
import { renderHelper } from '../../../setupTests';

const propTest = {
  id: '2f7f4e',
  activity_type: 'Snowboard',
  title: 'L1 Raw',
  image: 'image-url',
  description: 'Accusamus sint id. Est et iusto. Explicabo ipsam deleniti.',
  level: 'Beginner',
};

describe('<ActivityCard />', () => {
  beforeEach(() => {
    renderHelper(<ActivityCard activity={propTest} />);
  });

  test('renders the passed in title', () => {
    const title = screen.getByText(new RegExp(propTest.title), 'i');
    expect(title).toBeInTheDocument();
  });

  test('renders the passed in level', () => {
    const level = screen.getByText(new RegExp(propTest.level), 'i');
    expect(level).toBeInTheDocument();
  });

  test('renders the passed in description', () => {
    const description = screen.getByText(new RegExp(propTest.description), 'i');
    expect(description).toBeInTheDocument();
  });

  test('renders the passed in image', () => {
    const imageSrc = screen.getByRole('img');
    expect(imageSrc).toBeInTheDocument();
  });
});
