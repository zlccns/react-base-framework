/**
 * @external @testing-library/react
 * @desc 单元测试工具
 * @see https://github.com/testing-library/react-testing-library
*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
