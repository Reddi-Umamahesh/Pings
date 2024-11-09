import React from "react";
import Form from "./Form";

const Bodydata = [
  {
    name: "username",
    label: "username",
    placeHolder: "Enter your username",
    type: "text",
  },
  {
    name: "bio",
    label: "Bio",
    placeHolder: "Short bio (max 150 characters)",
    type: "text",
  },
  {
    name: "avatar",
    label: "Avatar",
    placeHolder: "profile photo",
    type: "file",
  },
  {
    name: "email",
    label: "Email",
    placeHolder: "you@example.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeHolder: "Enter your password",
    type: "password",
  },
];
const footer = 
  {
    button: "Signup",
    msg: "Have an account ?",
    link : "login"
  }

const RegisterForm: React.FC = () => {
  return (
    <div className="">
      <Form
        footerData={footer}
        bodyData={Bodydata}
        route="/register"
        type="multipart/form-data"
      />
    </div>
  );
};

export default RegisterForm;
