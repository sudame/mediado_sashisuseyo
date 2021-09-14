import React from "react";
import "./style.scss";
import logo from "./logo.svg";
import titleLogo from "./logo_title.svg";

export const AppBar: React.FC = () => {
  return (
    <div className="app-bar">
      <img className="app-bar--logo" src={logo} alt="" />
      <img className="app-bar--title-logo" src={titleLogo} alt="" />
      <div className="spacer"></div>
      <button
        className="app-bar--books-register"
        onClick={() => {
          // TODO: クリックしたときの挙動をどうにかする
          window.alert("本棚連携の実装");
        }}
      >
        本棚連携
      </button>
    </div>
  );
};
