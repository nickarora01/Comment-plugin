import { data } from "jquery";
import React from "react";
import Like from "./Like";
const CommentWrapper = (props) => {
  return (
    <>
      <div className="comment-body">
        {props.data}
        <i className="far fa-comment-alt" onClick={props.report} />
        <Like dataCom={props.data}/>
      </div>
    </>
  );
};
export default CommentWrapper;
