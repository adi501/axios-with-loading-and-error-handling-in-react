import React from "react";
import "./styles.css";

import AxiosLoadingErrorHandling from "./Components/AxiosLoadingErrorHandling";

export default function App() {
  return (
    <div className="App">
      <AxiosLoadingErrorHandling />{" "}
    </div>
  );
}
