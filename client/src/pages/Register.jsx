import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { FormRow, Logo } from "../components";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />

        <h4>Register</h4>

        <FormRow type="text" name="name" defaultValue="Rishabh" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Gupta"
        />
        <FormRow
          type="email"
          name="email"
          labelText="email"
          defaultValue="rish@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          labelText="password"
          defaultValue="secret123"
        />
        <FormRow type="text" name="location" defaultValue="Delhi" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member!
          <Link to="/Login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
