import React from "react"
import { Link } from "gatsby"

const Footer = ({}) => {
  return (
    <footer className="copyright-sec">
      <div className="container">
        <div className="footer-row d-flex align-items-center justify-content-between">
          <div className="footer-credits">
              <p className="footer-copyright">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <Link to={"/"}>Cute Animal Planet. All Rights Reserved.</Link>
              </p>
            </div>  
          <div className="fmenu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
        </div>
        

        <a className="to-the-top" href="#site-header">
          <span className="to-the-top-long">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
          <span className="to-the-top-short">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
        </a>      

      </div>
    </footer>
  )
}

export default Footer
