import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
export default function Header() {
  let navigate = useNavigate();
  const { userJoin, setUserJoin, imageSelected, time, setTime } =
    useContext(MyContext);
  const clearUser = () => {
    setUserJoin(false);
  };

  useEffect(() => {
    setInterval(() => {
      const today = new Date();
      const time = today.toLocaleDateString("de");
      const date = today.toLocaleTimeString("de");

      setTime({ date: date, time: time });
    }, 1000);
  }, []);

  return (
    <div className="Header">
      <div style={{ display: "flex" }}>
        <h4 className="btn-grad">{time.time}</h4>
        <h4 className="btn-grad">{time.date}</h4>

        <button className="btn-grad" onClick={() => navigate("/toList")}>
          Your To Do List
        </button>
      </div>
      <div className="Btn-Header">
        {userJoin ? (
          <Link to="/profile">
            <button className="btn-grad"> your profile </button>
          </Link>
        ) : (
          <Link to="/sign">
            <button className="btn-grad"> Sign in </button>
          </Link>
        )}
        {userJoin ? (
          <div>
            <Link to="/join">
              <button onClick={clearUser} className="btn-grad">
                sign out
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/join">
            <button className="btn-grad">Join us </button>
          </Link>
        )}
        <div className="Nav-Pic">
          {!userJoin ? (
            <FontAwesomeIcon icon={faUser} size="3x" />
          ) : imageSelected ? (
            <img src={imageSelected} alt="img" width="50px" height="50px" />
          ) : (
            <FontAwesomeIcon icon={faUser} size="3x" />
          )}
        </div>
      </div>
    </div>
  );
}
