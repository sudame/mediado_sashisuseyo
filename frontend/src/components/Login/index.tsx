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
      <div className="login-container login-center">
        <div className="login-header">
          <p>ログイン</p>
        </div>
        <form className="login-form login-center" onSubmit={handleSubmit}>
          <label className="login-form-label">ユーザーID</label>
          <input
            className="login-form-input login-form-text"
            type="text"
            placeholder=""
            onChange={handleInputChange}
          />
          <input
            className="login-form-input login-form-submit"
            type="submit"
            value="ログイン"
          />
        </form>
      </div>
    </>
  );
};
