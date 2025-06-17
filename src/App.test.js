import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el nombre completo en la landing', () => {
  render(<App />);
  const heading = screen.getByText(/Dulce Valeria Miguel Juan/i);
  expect(heading).toBeInTheDocument();
});
