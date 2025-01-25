import React from "react";
import { RouterProvider } from "react-router";
import router from "./router/Router";
import { UserProvider } from "./context/UserContext";

const App = () => {

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;


