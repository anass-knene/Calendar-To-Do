import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../Context/Context";
import "./Sign.scss";
export default function Sign() {
  const { user, setUserJoin } = useContext(MyContext);
  let navigate = useNavigate();
  const joinUser = (e) => {
    e.preventDefault();
    let signUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(signUser.email);
    console.log(user);
    if (user) {
      if (
        signUser.email === user.email &&
        signUser.password === user.password
      ) {
        setUserJoin(true);
        navigate("/profile");
      } else {
        alert("Check your E-mail or Password  ");
      }
    } else {
      alert("you must join first ");
    }
  };
  return (
    <div className="signDiv">
      <form className="signForm" onSubmit={joinUser}>
        <input
          type="email"
          name="email"
          placeholder="E-Mail..."
          required="required"
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          required="required"
        />

        <input className="join" type="submit" value="Sign in" />
      </form>
    </div>
  );
}
