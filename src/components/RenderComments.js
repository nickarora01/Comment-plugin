import React from "react";
const RenderComments = (props) => {
  return (
    <>
      <div className="comment-body">
        {props.data}
        <i className="far fa-comment-alt" onClick={props.report} />
        <i
        className="fa fa-thumbs-up"/>
      </div>
    </>
  );
};
export default RenderComments;
