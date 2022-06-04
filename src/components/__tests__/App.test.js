import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  test('renders learn react link', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /the nilito carlino foundation/i
      })
    ).toBeInTheDocument();
  });
});
