import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';
import { MockedProvider } from "@apollo/client/testing";
import mocks from '../mock-data';
import { getCounrty } from '../data';
import gql from 'graphql-tag';
describe('Home', () => {
  it('renders a heading', async() => {
    const mockApi = [{
      request: {
        query: gql`
        {
          countries {
            name
            code
          }
        }
      `
      },
      result: mocks
    }];
    const component = render(<MockedProvider mocks={mockApi} addTypename={false}><Home /></MockedProvider>);

    const heading = screen.getByRole('heading', {
      name: /Select and get info about country/i,
    })
    expect(heading).toBeInTheDocument();
    // expect(screen.getByTestId("country-select")).toHaveLength(4);
    waitFor(() => expect(screen.getByTestId("IN")).toBeInTheDocument());
    waitFor(() => expect(screen.getByRole('option', { value: "IN", id: "IN" }).selected).toBeTruthy());

    // expect(screen.getByRole('option', { value: 'IN' }).selected).toBe(true)

  })
})