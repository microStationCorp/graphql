import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS } from "../query/bookQuery";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return <p>loading....</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <ul>
        {data.books.map((b) => (
          <li key={b.id}>
            {b.name} : {b.genre} - {b.author.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
