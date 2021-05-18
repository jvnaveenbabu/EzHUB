import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <span onClick={() => window.scroll(0, 0)} className="header">
        <img
          src="https://img.icons8.com/fluent/28/000000/play.png"
          style={{ marginLeft: "10px" }}
        />
        <h3 style={{ marginLeft: "6px" }}>
          Ez<span style={{ color: "#2f80ed" }}>HUB</span>
        </h3>
        <a
          href="https://github.com/jvnaveenbabu/KIWU-Fashions"
          target="_blank"
          style={{ color: "#fff" }}
        >
          <i className="fab fa-github git-logo"></i>
        </a>
      </span>
    </>
  );
};

export default Header;
