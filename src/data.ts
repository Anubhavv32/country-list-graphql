import { gql } from "@apollo/client";

export const getCounrty = (countryCode : string) => gql` {
    country(code: "${countryCode}") {
      name
      native
      capital
      code
      currency
      languages {
        code
        name
      }
    }
  }
`;

const countryList = () => gql`
  {
    countries {
      name
      code
    }
  }
`;
// export const GET_COUNTRY_QUERY = getCounrty();
export const COUNTRY_LIST = countryList();
