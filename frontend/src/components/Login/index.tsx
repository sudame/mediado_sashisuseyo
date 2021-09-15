import React, { useContext } from "react";
import "./style.scss";

import { authContext } from "../hooks/useAuthContext";
import { useHistory } from "react-router";

export const Login: React.FC = () => {
  const auth = useContext(authContext);
  const history = useHistory();

  // context更新
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    auth.setUserId(Number(event.target.value));
  };

  const handleSubmit = () => {
    //   ページ遷移用関数
    auth.userId !== null && history.push("/");
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
