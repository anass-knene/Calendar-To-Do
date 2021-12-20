import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../Context/Context";
import "./Join.scss";

export default function Join() {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);
  const joinUser = (e) => {
    e.preventDefault();
    let userData = {
      userName: e.target.user_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      rePassword: e.target.re_password.value,
    };
    console.log(userData);

    if (
      userData.password === userData.rePassword &&
      userData.userName !== "" &&
      userData.email !== ""
    ) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/sign");
    } else {
      alert("check your Form something wrong ");
    }
    console.log(userData);
  };
  // useEffect(() => {
  //   let localUser = localStorage.getItem("user");
  //   console.log(localUser);
  //   if (localUser) {
  //     let originalUser = JSON.parse(localUser);
  //     setUser(originalUser);
  //   }
  // }, []);

  return (
    <div className="JoinDiv">
      <form className="JoinForm" onSubmit={joinUser}>
        <input type="text" name="user_name" placeholder="FullName..." />
        <input
          type="email"
          name="email"
          placeholder="E-Mail..."
          required="required"
        />
        <input type="password" name="password" placeholder="Password..." />
        <input
          type="password"
          name="re_password"
          placeholder="Re Enter Your Password..."
        />
        <input className="let" type="submit" value="Let me in." />
      </form>
    </div>
  );
}
