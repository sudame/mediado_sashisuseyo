import React, { useState } from "react";
import "./style.scss";

export const Login: React.FC = () => {
  const [userId, setUserId] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(Number(event.target.value));
  };

  const handleSubmit = () => {
    //   ページ遷移時に使用
  };

  return (
    <>
      <div className="login-container">
        <div className="page-title">
          <p>ログイン</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} />
          <input type="submit" value="ログイン" />
        </form>
      </div>
    </>
  );
};
