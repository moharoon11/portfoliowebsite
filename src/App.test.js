import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /mohamed haroon s/i })).toBeInTheDocument();
  expect(screen.getAllByText(/\.net backend developer/i)).toHaveLength(2);
});
