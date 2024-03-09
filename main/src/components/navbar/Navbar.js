"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import "./Navbar.css";
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  const pathname = usePathname();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="mainNav">
        <div className="logo">
          <a href="/">Logo</a>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link
                className={`link ${pathname === "/docs/components/gettingStarted/introduction" ? "active" : ""}`}
                href="/docs/components/gettingStarted/introduction"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/examples" ? "active" : ""}`}
                href="/examples"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === "/icons" ? "active" : ""}`}
                href="/icons"
              >
                Icons
              </Link>
            </li>
          </ul>
        </div>

        {/* hamburget menu start  */}
        <div
          className="mobileFun"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <IoMenuOutline style={{ width: "300px", height: "300px" }} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
