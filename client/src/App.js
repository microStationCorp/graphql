import BookList from "./components/BookList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache:new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <h1>book list</h1>
        </div>
        <BookList />
      </ApolloProvider>
    </>
  );
}

export default App;
