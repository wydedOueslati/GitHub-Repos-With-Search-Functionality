import React from "react";

import spinner from "../../spinner.gif";
import "./Loading.css";


/**
 * Functional Component for showing the Loading Spinner while getting Data.
 *
 * @callback
 * @returns {React.ElementType}
 */

const Loading = () => (
  <div className="loading">
    <img src={spinner} alt="loading" />
  </div>
);

export default Loading;