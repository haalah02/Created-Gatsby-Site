import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="cookieyes-script"
      id="cookieyes"
      type="text/javascript"
      src="https://scriptstaging.cookieyes.com/client_data/6722d32f6a3aad938b223092/script.js"
    />,
  ]);
};
