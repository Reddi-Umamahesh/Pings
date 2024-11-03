import React from "react";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterForm from "./components/auth/RegisterForm";
import LoginForm from "./components/auth/LoginForm";
import Home from "./components/home/Home";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Home />,
    },
    {
      path: "/signup",
      element : <RegisterForm />,
    },
    {
      path: "/login",
      element : <LoginForm /> 
    },
    

  ])
  return (
    <div className="flex min-h-screen  w-full  flex-col">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
