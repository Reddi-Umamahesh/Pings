import React from "react";
import From from "./components/auth/RegisterForm";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterForm from "./components/auth/RegisterForm";
import LoginForm from "./components/auth/LoginForm";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element : "",
    },
    {
      path: "/signup",
      element : <RegisterForm />,
    },
    {
      path: "/login",
      element : <LoginForm /> 
    }

  ])
  return (
    <div className="flex   w-full h-[100vh] flex-col">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
