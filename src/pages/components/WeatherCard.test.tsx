import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeatherCard from './WeatherCard';

// describe('Baisic weather card test', () => {
//   it('renders the date', () => {
//     render(<WeatherCard />);
//     expect(screen.getByTestId('date')).toBeInTheDocument();
//   });
// });

describe('testing byRole to get all the headings', () => {
  it('should render 5 headings', () => {
    render(<WeatherCard />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBe(5);
  });
});

// test that if the user selects an option that same option is displayed
describe('if user selects a role is the same option selected', () => {
  it('if London is selected, then London is displayed', async () => {
    //setting up the user event
    const user = userEvent.setup();
    //console.log(screen.getByRole('option', { name: 'foo' })); //trying to figure out what the values are before they get used by the userEVent

    // render the component you want to test
    render(<WeatherCard />);
    // starting an async user event on the combobox and fininf the option
    await user.selectOptions(screen.getByRole('combobox'), 'bar');

    expect(screen.getByRole('combobox')).toHaveValue('foo');
  });
});
