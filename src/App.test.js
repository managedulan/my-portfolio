import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero title text', () => {
  render(<App />);
  const heroElement = screen.getByText(/Designing for People/i);
  expect(heroElement).toBeInTheDocument();
});
