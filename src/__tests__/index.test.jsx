import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';
import { MockedProvider } from "@apollo/client/testing";
import mocks from '../mock-data';
import { getCounrty } from '../data';

describe('Home', () => {
  it('renders a heading', () => {
    const mockApi = [{
      request: {
        query: getCounrty
      },
      result: mocks
    }];
    render(<MockedProvider mocks={mockApi} addTypename={false}><Home /></MockedProvider>);

    const heading = screen.getByRole('heading', {
      name: /Select and get info about country/i,
    })

    expect(heading).toBeInTheDocument();
    expect(screen.getByRole('option', { value: 'IN' }).selected).toBe(true)

  })
})