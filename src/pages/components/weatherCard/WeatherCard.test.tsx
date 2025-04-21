import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeatherCard from './WeatherCard';

// // a test test
// describe('Baisic weather card test', () => {
//   it('renders the date', () => {
//     render(<WeatherCard />);
//     expect(screen.getByTestId('date')).toBeInTheDocument();
//   });
// });

// // ARIA role test on the headings
// describe('testing byRole to get all the headings', () => {
//   it('should render 5 headings', () => {
//     render(<WeatherCard />);
//     const headings = screen.getAllByRole('heading');
//     expect(headings.length).toBe(5);
//   });
// });

const locations = ['London', 'Amsterdam', 'Sydney', 'Neverland'];

// test that if the user selects an option that same option is displayed
describe('when user selects ANY location, the same value is assigned to the combobox componet', () => {
  it.each(locations)(
    'e.g. if London is selected, then the value of combobox is London',
    async (location) => {
      //setting up the user event
      const user = userEvent.setup();
      // render the component you want to test
      render(<WeatherCard />);

      //writing a default assertion
      expect(screen.getByRole('combobox')).toHaveValue('Select a location');
      // starting an async user event on the combobox and fininf the option
      await user.selectOptions(screen.getByRole('combobox'), location);
      expect(screen.getByRole('combobox')).toHaveValue(location);
    },
  );
});

// // test that if the user selects an option that same option is displayed
// describe('f the user selects an option that same option is displayed/has the text content', () => {
//   it('if London is selected, then London is displayed', async () => {
//     const location = 'London';
//     //setting up the user event
//     const user = userEvent.setup();
//     // render the component you want to test
//     render(<WeatherCard />);
//     // starting an async user event on the combobox and fininf the option
//     await user.selectOptions(screen.getByRole('combobox'), location);

//     expect(screen.getByRole('combobox')).toHaveTextContent('Sydney');
//     //console.log(screen.getByRole('combobox').textContent);
//   });
// });
