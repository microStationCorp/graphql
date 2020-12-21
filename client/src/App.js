import BookList from "./components/BookList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AuthorList from "./components/AuthorList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <h1>book list</h1>
        </div>
        <h3>book list</h3>
        <BookList />
        <h3>Author list</h3>
        <AuthorList />
      </ApolloProvider>
    </>
  );
}

export default App;
