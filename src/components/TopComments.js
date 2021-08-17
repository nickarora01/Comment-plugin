import { React, useState, useEffect } from "react";
import axios from "axios";
import RenderComments from "./RenderComments";
import SeeAllComments from "./SeeAllComments";
import Report from "./Report";
import PostSection from "./PostSection";
import Like from "./Like";
const TopComments = () => {
  const [data, showdata] = useState("");
  const [show, setshow] = useState({ display: "block" });
  const [render, setrender] = useState({ display: "none" });
  const [showReports, setshowReports] = useState({ display: "none" });
  const [postDisplay, setpostDisplay] = useState({ display: "none" });
  const [formDisplay, setformDisplay] = useState({ display: "block" });
  useEffect(() => {
    axios
      .get("http://localhost:80/reactbackend/data.php")
      .then((response) => {
        showdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const controlDisplay = () => {
    setshow({ display: "none" });
    setrender({ display: "block" });
    setformDisplay({ display: "none" });
  };
  const closeHandler = () => {
    setshow({ display: "block" });
    setformDisplay({ display: "block" });
    setrender({ display: "none" });
  };
  const closeReportHandler = () => {
    setshow({ display: "block" });
    setshowReports({ display: "none" });
    setformDisplay({ display: "block" });
  };
  const reportHandler = () => {
    setshow({ display: "none" });
    setshowReports({ display: "block" });
    setformDisplay({ display: "none" });
    setpostDisplay({ display: "none" });
    setrender({ display: "none" });
  };
  const formClickHandler = () => {
    setshow({ display: "none" });
    setrender({ display: "none" });
    setpostDisplay({ display: "block" });
    setformDisplay({ display: "none" });
  };
  const closePost = () => {
    setshow({ display: "block" });
    setrender({ display: "none" });
    setpostDisplay({ display: "none" });
    setformDisplay({ display: "block" });
  };
  return (
    <>
      <strong>Liking functionality is disabled on main page , its valid in see all page</strong>
      <div style={postDisplay}>
        <h2>
          <i className="fas fa-times" onClick={closePost}></i> Add Opinion
        </h2>
        <PostSection />
      </div>
      <div style={show}>
        <h2>Top reader Comments</h2>
        <span className="comment-content">
          <i className="far fa-comment-alt" onClick={reportHandler} />
          <Like />
        </span>
      </div>
      <div className="opinion-data" style={show}>
        <h2 onClick={controlDisplay}>
          See all opinions
          <i className="fas fa-angle-up" onClick={controlDisplay}></i>
        </h2>
        {data.split("/").map((item) => {
          return (
            <RenderComments
              data={item}
              key={Math.random()}
              report={reportHandler}
            />
          );
        })}
      </div>
      <div style={render}>
        <h2>
          See all opinions
          <i
            className="fa fa-times"
            onClick={closeHandler}
            aria-hidden="true"
          ></i>
        </h2>
        <SeeAllComments reportfunc={reportHandler} />
      </div>
      <div style={showReports}>
        <i className="fas fa-times" onClick={closeReportHandler}></i>
        <h1>Report comment</h1>
        <Report />
      </div>
      <div style={formDisplay} onClick={formClickHandler}>
        <form autoComplete="off">
          <input type="text" placeholder="Add your opinions" id="input-box" />
        </form>
      </div>
    </>
  );
};
export default TopComments;
