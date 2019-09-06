import React from 'react';
import { render } from '@testing-library/react';
import DarkMode from './DarkMode';

test('renders without crashing', () => {
  render(<DarkMode />);
});