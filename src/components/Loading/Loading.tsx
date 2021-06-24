//import React from 'react'

import Loader from "react-loader-spinner";
import "./Loading.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className={"loading-wrapper"}>
      <div className="content">
        <Loader type="Watch" color="#f1f1f1" height={70} width={100} />
        <h4>Please wait</h4>
      </div>
    </div>
  );
};
export default Loading;
