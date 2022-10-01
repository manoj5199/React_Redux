import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "./slides/slide1";
interface RootState {
  slice: { value: { firstName: string; age: number; gender: string } };
}
function App() {
  // type AppDispatch = typeof store.dispatch;
  const disp = useDispatch();
  const person = useSelector((state: RootState) => state.slice.value);
  const [newFirstName, setNewName] = useState("");
  return (
    <div className="App">
      <p>{`Hello ${person.firstName} !!!`}</p>
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
    </div>
  );
}

export default App;
