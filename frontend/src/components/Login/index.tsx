import React, { useContext } from "react";
import "./style.scss";

import { authContext } from "../hooks/useAuthContext";

export const Login: React.FC = () => {
  const auth = useContext(authContext);

  // context更新
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    auth.setUserId(Number(event.target.value));
  };

  const handleSubmit = () => {
    //   ページ遷移用関数
  };

  return (
    <>
      <div className="login-container login-center">
        <div className="login-header">
          <p>ログイン</p>
        </div>
        <form className="login-form login-center">
          <input
            className="login-form-input login-form-text"
            type="text"
            placeholder="ユーザーID"
            onChange={handleInputChange}
          />
          <input
            className="login-form-input login-form-submit"
            type="button"
            value="ログイン"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};
