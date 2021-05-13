import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import RecentPost from "./RecentPost"

import FooterMenusWidgets from "./FooterMenusWidgets"

import MenuModal from "./MenuModal"

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    var elem = document.getElementById("primaryMenu");
      if (elem.classList.contains("d-none")) {
          elem.classList.remove("d-none");
      } else {
          elem.classList.add("d-none");
      }
  }




  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" className="container" role="main">
        <div className="row">
            <div className="content-left row">
                {children}
            </div>
            <div className="sidebar">
              <div className="widget">
                <h3 className="widget-title">Welcome to Cute Animal Planet!</h3>
              </div>
              <div className="widget">
                <RecentPost />
              </div>
            </div>
        </div>
      </main>

      <FooterMenusWidgets />

      <Footer />
    </div>
  )
}

export default Layout
