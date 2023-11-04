import React from "react";
import Form from "../../components/Form/Form";
import "./auth.scss";
export const AuthenticationPage = () => {
  return (
    <>
      <div className="col-md-4 offset-md-4 auth-page">
        <div className="col-md-8">
          {" "}
          <Form />
        </div>
      </div>
    </>
  );
};
