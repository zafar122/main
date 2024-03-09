import Link from "next/link";
import styleIn from "../../css/Docs.module.css";
import Code1 from "./Components/Code/code1/code1.js";

function Introduction() {
  return (
    <>
      <div className={styleIn.fistDiv}>
        <div className={styleIn.container}>
          <div className={styleIn.h1Div}>
            <h1>Get started with C_C_P</h1>
          </div>
          <div className={styleIn.fistPra}>
            <p>
              C_C_P is a powerful, feature-packed frontend toolkit. Build
              anything—from prototype to production—in minutes.
            </p>
          </div>
          <div className={styleIn.h2Div}>
            <h2 id="QuickStart ">Quick start </h2>

            <div className={styleIn.h2pra}>
              <p>
                Get started by including C_C_P production-ready CSS and
                JavaScript via CDN without the need for any build steps.{" "}
              </p>
            </div>
          </div>

          <div className={styleIn.praDiv}>
            <div className={styleIn.h2pra}>
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

export default Introduction;
