import { useQuery, gql } from "@apollo/client";

const GET_ALL_BOOKS = gql`
  query GET_ALL_BOOKS {
    books {
      name
      genre
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return <p>loading....</p>;
  if (error) return <p>error</p>;
  if (data) {
    console.log(data.books);
  }
  return (
    <div>
      <ul>
        {data.books.map((b) => (
          <li key={b.id}>
            {b.name} : {b.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
