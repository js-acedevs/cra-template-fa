import { render, screen } from '@testing-library/react';
import App from './App';

test('renders template head', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to ornio cra template/i);
  expect(linkElement).toBeInTheDocument();
});
