import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

describe('Basic weather card test', () => {
  it('renders the date', () => {
    render(<WeatherCard />);
    expect(screen.getByTestId('date')).toBeInTheDocument();
  });
});
