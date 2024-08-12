import React from "react";
import { motion } from "framer-motion";
import Logo1 from '../assets/RothleyLodgeLogoArtwork_Reverse1.png';
import Logo from '../assets/RothleyLodgeLogoArtwork_Reverse.png';


export const Navigation = (props) => {
  return (
    <motion.nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="" href="#page-top">
          <img   src= {Logo} alt="Rothley Lodge" style={{ height: '40px', width: 'auto' }} />
          <img className="desktop-logo" src={Logo1} alt="Rothley Lodge" style={{ height: '30px', width: 'auto' }} />
          </a>{" "}
        </div>

        <motion.div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ul className="nav navbar-nav navbar-right">
            {[
              { href: "#features", text: "Features" },
              { href: "#about", text: "About" },
              { href: "#services", text: "Services" },
              { href: "#portfolio", text: "Gallery" },
              { href: "#testimonials", text: "Testimonials" },
              { href: "#qna", text: "QNA" },
              { href: "#contact", text: "Contact" },
            ].map((item, index) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <a href={item.href} className="page-scroll">
                  {item.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};
