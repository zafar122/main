import Link from "next/link";
import styleIn from "../../css/Docs.module.css";
import Code1 from "./Components/Code/code1/code1.js";

function Alerts() {
  return (
    <>
      <div className={styleIn.fistDiv}>
        <div className={styleIn.container}>
          <div className={styleIn.h1Div}>
            <h1>Alerts</h1>
          </div>
          <div className={styleIn.fistPra}>
            <p>
            Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
            </p>
          </div>
          <div className={styleIn.h2Div}>
            <h2 id="Examples ">Examples </h2>

            <div className={styleIn.h2pra}>
              <p>
              Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts JavaScript plugin.
              </p>
            </div>
          </div>
          <div className={styleIn.noteDiv}>
            <div className={styleIn.note}>
            . Alert variants now have their CSS variables overridden in a Sass loop. 
            </div>
          </div>
          <div className={styleIn.codeDiv}>
            <div className={styleIn.codeTital}>
              <p>
                1. &emsp; Create a new index.html file in your project root.
                Include the
                <span>&lt; meta name="viewport"&gt; </span>tag as well for
                proper responsive behavior in mobile devices.
              </p>
            </div>
            <div className={styleIn.code}>
              <Code1 />
            </div>
          </div>

          <div className={styleIn.codeDiv}>
          <div className={styleIn.exampleCode}>
              {/* <Accordin/> */}
            </div>
            <div className={styleIn.code}>
              <Code1 />
            </div>
          </div>
        </div>
      </div>



      <div className={styleIn.leftNav}>
        <div>
          <ul>
            <li>
              <Link href="">h2Link</Link>
            </li>
            <li>
              <Link href="">h2Link</Link>
            </li>
            <li>
              <Link href="">h2Link</Link>
            </li>
          </ul>
          <div className={styleIn.googleAdd}>adds</div>
        </div>
      </div>
    </>
  );
}

export default Alerts;
