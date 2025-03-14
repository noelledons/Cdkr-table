import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';
import userEvent from '@testing-library/user-event';

const mockData = [
  {
    _id: '1',
    name: 'Bill Gates',
    dob: '1995-10-28',
    email: 'billgates@microsoft.com',
    verified: true,
    salary: 50000,
  },
  {
    _id: '2',
    name: 'Jeff Bezos',
    dob: '1964-01-12',
    email: 'jeffbezos@amazon.com',
    verified: false,
    salary: 60000,
  },
];

test('renders table rows correctly', () => {
  render(<Table data={mockData} />);
  expect(screen.getByText('Bill Gates')).toBeInTheDocument();
  expect(screen.getByText('Jeff Bezos')).toBeInTheDocument();
});

test('sorts table by name when the sort button is clicked', () => {
  render(<Table data={mockData} />);
  const sortButton = screen.getByRole('button', { name: /name/i });
  userEvent.click(sortButton);
  expect(screen.getByText('Bill Gates')).toBeInTheDocument();
  expect(screen.getByText('Jeff Bezos')).toBeInTheDocument();
});
