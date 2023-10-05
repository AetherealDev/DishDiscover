import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
      },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    function App() {
      return (
        <ApolloProvider client={client}>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Outlet />
            </div>
            <Footer />
          </div>
        </ApolloProvider>
      );
    }
  )
}

export default App


