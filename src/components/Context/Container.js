import React, { useState } from "react";
import { MyContext } from "./Context";

export default function Container(props) {
  const [user, setUser] = useState(null);
  const [userJoin, setUserJoin] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        userJoin,
        setUserJoin,
        imageSelected,
        setImageSelected,
        loading,
        setLoading,
        time,
        setTime,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
