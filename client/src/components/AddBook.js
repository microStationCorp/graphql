import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOK_MUTATION } from "../mutation/bookMutation";
import { GET_ALL_AUTHORS } from "../query/authorQuery";
import { GET_ALL_BOOKS } from "../query/bookQuery";

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorid] = useState("");
  const [addBook] = useMutation(ADD_BOOK_MUTATION);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name !== "" && genre !== "" && authorId !== "") {
      addBook({
        variables: {
          name,
          genre,
          authorId,
        },
        refetchQueries: [{ query: GET_ALL_BOOKS }],
      });
      setName("");
      setGenre("");
    }
  };

  if (error) {
    return <p>something error</p>;
  } else {
    return (
      <>
        <h1>Add Book</h1>
        <form id="add-book" onSubmit={submitHandler}>
          <div className="field">
            <label>Book Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Genre :</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          {loading ? (
            <p>loading...</p>
          ) : (
            <div className="field">
              <label>Author :</label>
              <select onChange={(e) => setAuthorid(e.target.value)}>
                <option value="null">select author</option>
                {data.authors.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button>+</button>
        </form>
      </>
    );
  }
};

export default AddBook;
