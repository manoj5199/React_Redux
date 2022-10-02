import React from "react";
import { useSelector } from "react-redux";
import "../css/albums.css";

interface AlbumState {
  album: {
    value: [
      {
        userId: 0;
        id: 0;
        title: "";
      }
    ];
  };
}

const AlbumsList = () => {
  const albums = useSelector((state: AlbumState) => state.album.value);
  return (
    <div>
      <ul className="u_list">
        {albums.map((a) => {
          return (
            <li className="album_list" key={Math.random().toString()}>
              <div className="albun_userID">{`User ID : ${a.userId}`}</div>
              <div className="album_title">{`${a.title.toUpperCase()}`}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AlbumsList;
