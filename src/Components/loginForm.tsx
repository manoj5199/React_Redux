import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumsList from "./albums";
import "../css/loginForm.css";
import { fetchUser, usersState, setUserName } from "../Slices/userLogin";
import { fetchAlbumDatas } from "../Slices/albums";

const LoinForm = () => {
  const users = useSelector((state: any) => state.users);
  const loginState = users.loged;
  const userID: usersState = users.user[0];
  const disp = useDispatch();

  const onLoginHandler = async () => {
    await disp(fetchUser() as any);
    await disp(fetchAlbumDatas() as any);
  };

  return !loginState ? (
    <div>
      <form id="login_form">
        <input
          id="user_input"
          type={"text"}
          placeholder="USER NAME"
          onChange={(e) => {
            disp(setUserName(e.target.value));
          }}
          required
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onLoginHandler();
          }}
        >
          Login
        </button>
      </form>
    </div>
  ) : (
    <AlbumsList userID={userID.id.toString()}></AlbumsList>
  );
};

export default LoinForm;
