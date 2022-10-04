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

const AlbumsList = (props: { userID: string }) => {
  const albums = useSelector((state: AlbumState) => state.album);
  const album = albums.value?.filter(
    (a) => a.userId.toString() === "props.userID"
  );
  return (
    <div>
      <ul className="u_list">
        {album.map((a) => {
          return (
            <li className="album_list" key={Math.random().toString()}>
              <div className="albun_userID">{`User ID : ${a?.userId}`}</div>
              <div className="album_title">{`${a?.title.toUpperCase()}`}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AlbumsList;
