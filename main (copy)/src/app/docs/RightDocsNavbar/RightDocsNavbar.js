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
                  <Link href="/docs/gettingStarted/introduction">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/gettingStarted#contents">Contents</Link>
                </li>
                <strong>
                  {" "}
                  <GrPersonalComputer style={{ fontSize: "22px" }} /> Components
                </strong>
                <li>
                  <Link href="/components#accordion">Accordion</Link>
                </li>
                <li>
                  <Link href="">Alerts</Link>
                </li>
                <li>
                  <Link href="">Badge</Link>
                </li>
                <li>
                  <Link href="">Breadcrumb</Link>
                </li>
                <li>
                  <Link href="">Buttons</Link>
                </li>
                <li>
                  <Link href="">Button group</Link>
                </li>
                <li>
                  <Link href="">Card</Link>
                </li>
                <li>
                  <Link href="">Carousel</Link>
                </li>
                <li>
                  <Link href="">Dropse</Link>
                </li>
                <li>
                  <Link href="">Dropdowns</Link>
                </li>
                <li>
                  <Link href="">List group</Link>
                </li>
                <li>
                  <Link href="">Modal</Link>
                </li>
                <li>
                  <Link href="">Navbar</Link>
                </li>
                <li>
                  <Link href="">Nav&tabs</Link>
                </li>
                <li>
                  <Link href="">Offcanvas</Link>
                </li>
                <li>
                  <Link href="">placeholders</Link>
                </li>
                <li>
                  <Link href="">Popovers</Link>
                </li>
                <li>
                  <Link href="">Progress</Link>
                </li>
                <li>
                  <Link href="">Scrollspy</Link>
                </li>
                <li>
                  <Link href="">Spinners</Link>
                </li>
                <li>
                  <Link href="">Toasts</Link>
                </li>
                <li>
                  <Link href="">Tooltips</Link>
                </li>

                <strong>
                  <IoLogoDropbox style={{ fontSize: "22px" }} /> Forms
                </strong>
                <li>
                  <Link href="">Overview</Link>
                </li>
                <li>
                  <Link href="">Form control</Link>
                </li>
                <li>
                  <Link href="">Select</Link>
                </li>
                <li>
                  <Link href="">Checks & radios</Link>
                </li>
                <li>
                  <Link href="">Select</Link>
                </li>
                <li>
                  <Link href="">Rangs</Link>
                </li>
                <li>
                  <Link href="">Input group</Link>
                </li>
                <li>
                  <Link href="">Floating labels</Link>
                </li>
                <li>
                  <Link href="">Layout</Link>
                </li>
                <li>
                  <Link href="">Validaion</Link>
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
