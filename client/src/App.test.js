import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';

// 1. نقوم بعمل محاكاة لمكتبة axios
jest.mock('axios');

test('renders learn react link', () => {
  // 2. نجعل axios يرد بقيمة وهمية ناجحة بدلاً من محاولة الاتصال بالخادم
  axios.get.mockResolvedValue({ data: [] });

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});