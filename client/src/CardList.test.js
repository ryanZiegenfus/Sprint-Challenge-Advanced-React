import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';
import App from './App';

test('renders without crashing',  async () => {
    await render(<CardList />)
  })