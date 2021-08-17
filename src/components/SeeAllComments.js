import { React, useState, useEffect } from "react";
import axios from "axios";
import CommentWrapper from "./CommentWrapper";
const SeeAllComments = (props) => {
  const [arr, setarr] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:80/reactbackend/result.php")
      .then((response) => {
        setarr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      {arr.split("/").map((item) => {
        return (
          <CommentWrapper
            data={item}
            key={Math.random()}
            report={props.reportfunc}
          />
        );
      })}
    </>
  );
};
export default SeeAllComments;
