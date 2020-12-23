import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR_MUTATION } from "../mutation/AuthorMutation";
import { GET_ALL_AUTHORS } from "../query/authorQuery";

const AddAuthor = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [addAuthor] = useMutation(ADD_AUTHOR_MUTATION);

  const submitAuthorFormHandler = (e) => {
    e.preventDefault();
    if (name !== "" && age !== 0 && age !== "") {
      addAuthor({
        variables: { name, age },
        refetchQueries: [{ query: GET_ALL_AUTHORS }],
      });
    }
  };
  return (
    <>
      <h1>Add author</h1>
      <form id="add-author" onSubmit={submitAuthorFormHandler}>
        <div className="field">
          <label>Author name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Age :</label>
          {/* <input type="num" /> */}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <button>+</button>
      </form>
    </>
  );
};

export default AddAuthor;
