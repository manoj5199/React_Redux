import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_ALBUMS } from "../Constants/URL";
import { addAlbum } from "../Slices/albums";
import { usersState } from "../Slices/users";
import AlbumsList from "./albums";
import "../css/loginForm.css";

const LoinForm = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector((state: usersState) => state.users.value);
  const disp = useDispatch();
  const fetchData = async () => {
    try {
      const res = await Axios.get(API_URL_ALBUMS);
      disp(addAlbum(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const [initialRender, setInitialRender] = useState(true);
  const [loginState, setLoginState] = useState(false);
  useEffect(() => {
    if (initialRender) {
      fetchData();
      setInitialRender(false);
    }
  }, [loginState]);

  const userValidate = (userName: string) => {
    users.filter((user) => {
      if (user.username !== "" && user.username === userName) {
        setUserId(user.id.toString());
        setLoginState(true);
      }
    });
  };

  return !loginState ? (
    <div>
      <form id="login_form">
        <input
          id="user_input"
          type={"text"}
          placeholder="USER NAME"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setInitialRender(true);
            userValidate(userName);
          }}
        >
          Login
        </button>
      </form>
    </div>
  ) : (
    <AlbumsList userID={userId}></AlbumsList>
  );
};

export default LoinForm;
