import React from "react";
import LoginForm from "../../components/Form/LoginForm";
import "./auth.scss";
export const LoginPage = () => {
  return (
    <>
      <div className="col-md-4 offset-md-4 auth-page">
        <div className="col-md-8 offset-md-2">
          {" "}
          <LoginForm />
        </div>
      </div>
    </>
  );
};
