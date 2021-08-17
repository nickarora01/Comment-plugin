import { React, useState } from "react";
import { Link } from "react-router-dom";
const Menu = (props) => {
  const onclickHandler = () => {
    props.hidedisplay();
  };
  return (
    <>
      <Link exact to="/report" onClick={onclickHandler}>
        <i className="far fa-comment-alt" />
      </Link>
    </>
  );
};
export default Menu;
