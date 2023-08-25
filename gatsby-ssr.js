import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      // key="cookieyes-script"
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/494f1850bb481d55a2d7384a/script.js"
    />,
  ]);
};
