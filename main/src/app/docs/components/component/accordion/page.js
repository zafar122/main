import Link from "next/link";
import styleIn from "../../css/Docs.module.css";
import Code1 from "./Components/Code/code1/code1.js";

function Accordin() {
  return (
    <>
      <div className={styleIn.fistDiv}>
        <div className={styleIn.container}>
          <div className={styleIn.h1Div}>
            <h1>Accordion</h1>
          </div>
          <div className={styleIn.fistPra}>
            <p>
              Build vertically collapsing accordions in combination with our
              Collapse JavaScript plugin.
            </p>
          </div>
          <div className={styleIn.h2Div}>
            <h2 id="QuickStart ">How it works </h2>

            <div className={styleIn.h2pra}>
              <p>
                The accordion uses collapse internally to make it collapsible.
              </p>
            </div>
          </div>
          <div className={styleIn.noteDiv}>
            <div className={styleIn.note}>
              The animation effect of this component is dependent on the{" "}
              <span> prefers-reduced-motion</span> media query.
            </div>
          </div>

          <div className={styleIn.h2Div}>
            <h2 id="Example  ">Example </h2>

            <div className={styleIn.h2pra}>
              <p>
                Click the accordions below to expand/collapse the accordion
                content.
              </p>
              <p>To render an accordion that’s expanded by default:</p>
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

export default Accordin;
