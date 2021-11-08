import React, {useState}  from "react";
import "./App.css";
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {gql, useQuery} from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";
import Searchbar from './Bar';
import { useStateWithCallbackLazy } from 'use-state-with-callback';


/* Conexión con el grafo GraphQL */
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

// Query hecha al grafo que retorna los datos que necesitamos
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      continent{
        name
      }
      languages{
        name
      }
      emoji
      code
    }
  }
`;


function App () {

  const [keyword, setKeyword] = useStateWithCallbackLazy("");
  const [group, setGroup] = useState("continent");
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  if (loading||error){ 
        return <p>Loading...</p>
    }

  return(
    <ApolloProvider client={client}>
      <div className="App">
        <h1>
          Country Search
        </h1>
        <h5>Some random text. </h5>

        <Searchbar data = {data} client = {client} keyword = {keyword} setKeyword = {setKeyword} group = {group} setGroup = {setGroup} > </Searchbar>

      </div>
    </ApolloProvider>
  )
};
export default App;
