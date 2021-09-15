import React, { useContext, useState } from "react";
import "./style.scss";

import { authContext } from "../hooks/useAuthContext";
import { useHistory } from "react-router";

export const Login: React.FC = () => {
  const [userId, setUserId] = useState<string>();
  const auth = useContext(authContext);
  const history = useHistory();

  // context更新
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const handeEnterKey = () => {};

  const handleSubmit = () => {
    if (userId) {
      auth.setUserId(Number(userId));
      history.push("/");
    }
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
            onKeyDown={(event) => {
              if (event.keyCode === 13) handleSubmit();
            }}
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
