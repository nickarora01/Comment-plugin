import { React, useState } from "react";
import axios from "axios";
const PostSection = (props) => {
  const [Input, setInput] = useState("");
  const onAddHandler = (event) => {
    event.preventDefault();
    const path = "http://localhost:80/reactbackend/";
    if (Input !== "") {
      axios
        .post(path, {
          textfield: Input,
        })
        .then(function (response) {
          console.log(response);
        });
      alert("Opinion Added!");
      setInput("");
    } else {
      alert("Please enter your opinion");
    }
  };
  return (
    <>
      <button onClick={onAddHandler}>Post</button>
      <span>
        What do you support? <i className="fas fa-angle-up"></i>
      </span>
      <form action="#">
        <textarea
          rows="35"
          cols="170"
          name="textfield"
          value={Input}
          onChange={(event) => setInput(event.target.value)}
        ></textarea>
      </form>
    </>
  );
};
export default PostSection;
