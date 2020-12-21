import { useQuery } from "@apollo/client";
import { GET_ALL_AUTHORS } from "../query/authorQuery";

const AuthorList = () => {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS);

  if (loading) return <p>loading....</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <ul>
        {data.authors.map((b) => (
          <li key={b.id}>
            {b.name} : {b.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
