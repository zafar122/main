import Image from "next/image";
import styles from "./page.module.css";
import mainImg from "../../public/Img/homeMainImg.jpg";
import CopyHtmlBtn from "../components/copyBtns/htmlBtn/copyHtmlBtn.js"


export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.fistDiv}>
        <div className={styles.h1Div}>
          <h1>Wellcome to Code Copy Paste</h1>
        </div>

        <div className={styles.ImgDiv}>
          <Image src={mainImg} width="594" height="344" alt="fistImg"></Image>
        </div>
        <div className={styles.h2Div}>
          <h2>Build fast, responsive sites with Code Copy Paste</h2>
        </div>

        <div className={styles.fistPra}>
          <p>
            Powerful, extensible, and feature-packed frontend toolkit. Build and
            customize with Sass, utilize prebuilt grid system and components,
            and bring projects to life with powerful JavaScript plugins.
          </p>
        </div>
        <div className="btnLink">
          <a href="/docs">Read Does</a>
        </div>
        <CopyHtmlBtn code={`<div>My HTML code</div>`} />

      </div>
    </div>
  );
}
