"use client";
import React from "react";
import navStyle from "./nav.module.css";
import Link from "next/link";
// Getting Started
import { HiBookOpen } from "react-icons/hi2";
// Components
import { GrPersonalComputer } from "react-icons/gr";
//Forms
import { IoLogoDropbox } from "react-icons/io";

function RightDocsNavbar() {
  return (
    <>
      <div className={navStyle.asideDiv}>
        <aside>
          <div className={navStyle.div}>
            <nav className={navStyle.nav}>
              <ul>
                <strong>
                  <HiBookOpen style={{ fontSize: "22px" }} /> Getting Started
                </strong>
                <li>
                  <Link href="/docs/components/gettingStarted/introduction">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/docs/components/gettingStarted/contents">Contents</Link>
                </li>
                <strong>
                  {" "}
                  <GrPersonalComputer style={{ fontSize: "22px" }} /> Components
                </strong>
                <li>
                  <Link href="/docs/components/component/accordion">Accordion</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/alerts">Alerts</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/badge">Badge</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/breadcrumb">Breadcrumb</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/Buttons">Buttons</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/buttobGroup">Button group</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/card">Card</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/carousel">Carousel</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/dropse">Dropse</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/dropdowns">Dropdowns</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/listGroup">List group</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/modal">Modal</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/navbar">Navbar</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/nav&tabs">Nav&tabs</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/offcanvas">Offcanvas</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/placeholders">Placeholders</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/popovers">Popovers</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/progress">Progress</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/scrollspy">Scrollspy</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/spinners">Spinners</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/toasts">Toasts</Link>
                </li>
                <li>
                  <Link href="/docs/components/component/tooltips">Tooltips</Link>
                </li>

                <strong>
                  <IoLogoDropbox style={{ fontSize: "22px" }} /> Forms
                </strong>
                <li>
                  <Link href="/docs/components/forms/">Overview</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Form control</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Select</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Checks & radios</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Select</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Rangs</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Input group</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Floating labels</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Layout</Link>
                </li>
                <li>
                  <Link href="/docs/components/forms/">Validaion</Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}

export default RightDocsNavbar;
