import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeState } from "./slides/slide1";
import List from "./liist";

export interface RootState {
  slice: { value: [{ firstName: string; age: number; gender: string }] };
}

function App() {
  // type AppDispatch = typeof store.dispatch;
  const disp = useDispatch();

  const [newFirstName, setNewName] = useState("");
  return (
    <div className="App">
      <input
        type={"text"}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          disp(
            changeState({
              firstName: `${newFirstName}`,
              age: 20,
              gender: "Female",
            })
          );
        }}
      >
        Add
      </button>
      <List></List>
    </div>
  );
}

export default App;
