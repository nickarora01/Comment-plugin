import { React, useState, useEffect } from "react";
const ReportContent = (props) => {
  const [message, setmessage] = useState(false);
  const showMessage = () => {
    setmessage(true);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setmessage(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [message]);
  return (
    <>
      <h2 className="com-link" onClick={showMessage}>
        {props.data}
      </h2>
      {message && <p>Issue Selected</p>}
    </>
  );
};
export default ReportContent;
