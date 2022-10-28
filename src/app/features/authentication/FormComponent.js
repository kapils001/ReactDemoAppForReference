// import React, { useReducer } from "react";
// import { useSelector } from "react-redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./authenticationSlice";
import { login } from "./authenticationSlice";

const FormComponent = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  // console.log(authActions)
  
  const loginHandler = (e) => {
    e.preventDefault();
    // console.warn("before Login:", isAuth)
    // dispatch(login());
    dispatch(login());

    console.warn("after Login:", isAuth)
  };
  return (
    <div className="container-fluid">
      <form onSubmit={loginHandler}
        className="form-group">
        <dt>Name :</dt>
        <dd>
          <input type="text" />
        </dd>

        <dt>Password : </dt>

        <dd>
          <input type="password" />
        </dd>

        <button type = 'submit' >Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
