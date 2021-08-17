import React from "react";
import ReportContent from "./ReportContent";
const Report = () => {
  const reportArray = [
    "Spam",
    "Contains hate speech",
    "False Information",
    "I donot like it",
    "Promoting goods",
    "Bullying or harassment",
    "Intellectual property violation",
    "Not listed",
  ];
  const onClickHandler = () => {
    alert("Issue Submitted!");
  };
  return (
    <>
      <div className="report-header">
        <button onClick={onClickHandler}>Post</button>
      </div>
      {reportArray.map((item) => {
        return <ReportContent data={item} key={Math.random()} />;
      })}
      <a href="#">
        <h2 className="read-community">
          Read our Community Guidelines{" "}
          <i className="fas fa-long-arrow-alt-right"></i>
        </h2>
      </a>
    </>
  );
};
export default Report;
