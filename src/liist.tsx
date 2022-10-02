import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./App";

const Lists = () => {
  const person = useSelector((state: RootState) => state.slice.value);

  return (
    <div>
      <ul>
        {person.map((a) => (
          <h1 id={Math.random().toString()}>{a.firstName}</h1>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
