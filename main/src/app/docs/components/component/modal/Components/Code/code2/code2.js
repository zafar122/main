import React from "react";
import CopyHtmlBtn from "../../../../../../../components/copyBtns/htmlBtn/copyHtmlBtn.js";

function Code2() {
  return (
    <>
      <div>
        <div>
          <CopyHtmlBtn
            code={`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
`}
          />
        </div>
      </div>
    </>
  );
}

export default Code2;
