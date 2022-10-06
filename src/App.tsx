import React from "react";
import LoinForm from "./Components/loginForm";

export interface RootState {
  slice: { value: [{ firstName: string; age: number; gender: string }] };
}

function App() {
  // type AppDispatch = typeof store.dispatch;

  return (
    <div className="App">
      <div>
        <LoinForm></LoinForm>
      </div>
    </div>
  );
}

export default App;
