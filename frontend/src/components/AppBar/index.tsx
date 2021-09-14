import React from "react";
import "./style.scss";
import logo from "./logo.svg";

export const AppBar: React.FC = () => {
  return (
    <div className="app-bar">
      <img src={logo} alt="" />
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
