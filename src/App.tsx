import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAlbum } from "./Slices/albums";
import Axios from "axios";
import { API_URL } from "./Constants/URL";
import AlbumsList from "./Components/albums";

export interface RootState {
  slice: { value: [{ firstName: string; age: number; gender: string }] };
}

function App() {
  // type AppDispatch = typeof store.dispatch;
  const disp = useDispatch();
  const fechData = async () => {
    try {
      const res = await Axios.get(API_URL);
      disp(addAlbum(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const [effect, setEffect] = useState(true);
  useEffect(() => {
    if (effect) {
      fechData();
      setEffect(false);
    }
  }, [effect]);

  return (
    <div className="App">
      <AlbumsList></AlbumsList>
    </div>
  );
}

export default App;
