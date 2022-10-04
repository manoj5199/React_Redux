import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "./Slices/users";
import Axios from "axios";
import { API_URL_USERS } from "./Constants/URL";
import LoinForm from "./Components/loginForm";

export interface RootState {
  slice: { value: [{ firstName: string; age: number; gender: string }] };
}

function App() {
  // type AppDispatch = typeof store.dispatch;
  const disp = useDispatch();

  const fetchUsers = async () => {
    try {
      const res = await Axios.get(API_URL_USERS);
      disp(addUsers(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      fetchUsers();
      setInitialRender(false);
    }
  }, [initialRender]);

  return (
    <div className="App">
      <div>
        <LoinForm></LoinForm>
      </div>
    </div>
  );
}

export default App;
