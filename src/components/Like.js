import { React, useState, useEffect } from "react";
import axios from "axios";
const Like = (props) => {
  const [LikeColor, setLikeColor] = useState({ color: "grey" });
  const [Count, setCount] = useState(0);
  const onLikeHandler = () => {
    const id = props.dataCom.charAt(0);
    if (Count === 0) {
    const url = "http://localhost:80/reactbackend/like.php";
      setLikeColor({ color: "blue" });
      setCount(1);
      axios
        .post(url, { Id: id, number: 1 })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLikeColor({ color: "grey" });
      setCount(0);
    }
  };
  return (
    <>
      <i
        className="fa fa-thumbs-up"
        onClick={onLikeHandler}
        style={LikeColor}
      />
      {Count}
    </>
  );
};
export default Like;
