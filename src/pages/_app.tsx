import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import fetch from 'cross-fetch';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com/", fetch }),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}
