import React from "react";
import "./Option.css";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="Option">
      <Link to={"/"} className="opt__form">
        Data
      </Link>
      <Link to={"/form"} className="opt__form">
        Form
      </Link>
    </div>
  );
};

export default Option;
