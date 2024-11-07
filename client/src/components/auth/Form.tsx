import React  from "react";
import axios from "axios";
import { authState, userState } from '../../recoil/userAtom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { user_api_endpoint } from "@/utils/constant";
import { useUserContext } from "./UserContext";

import {toast} from 'sonner'
import { useSetRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';




interface InputData {
  name: string;
  label: string;
  placeHolder: string;
  type: string;
} 
interface FormData {
  email: string;
  password: string;
  username?: string;
  bio?: string;
}

interface FooterData {
  button: string;
  msg: string;
  link: string;
}

interface FormProps {
  bodyData: InputData[] ;
  footerData: FooterData;
  route: string;
}

const Form: React.FC<FormProps> = ({ bodyData, footerData, route }) => {
  const nagivate = useNavigate();
  const setAuthToken = useSetRecoilState(authState)
const setUser = useSetRecoilState(userState)
  const { formData, setFormData } = useUserContext();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev:FormData) => ({ ...prev, [name]: value })); 
    };
  
  const action = `${user_api_endpoint}` + route
  const submitHandler = async(e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const data = { ...formData };
    try {
      
      const res = await axios.post(action, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials : true
      })
      const {token , user} = res.data
      if (token) {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
        setUser(user);
        nagivate('/')
      }

    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response?.data.message)
        } else {
          console.log("u1")
          toast.error("Unexpected error occured");
        }
      } else {
        console.log("u2");
        toast.error("Unexpected error occured");
      }

    } 
  }
  return (
    <div className=" flex cust-400:items-center   justify-center w-full h-screen overflow-y-auto  p-2 ">
      <Card className="cust-400:min-w-[300px] w-[320px] cust-400:w-auto  cust-400:min-h-[60%] overflow-auto h-fit cust-400:mt-0 mt-10">
        <CardHeader>
          <CardTitle className="text-7xl text-center font-bold font-qwitcher">
            Pings
          </CardTitle>
          <CardDescription className="text-center text-lg font-medium">
            Sign up to see Blogs, stories and many more..
          </CardDescription>
        </CardHeader>
        <form action={action} onSubmit={submitHandler} method="post" >
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {bodyData.map((ele, index) => (
                <div key={index} className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{ele.label}</Label>
                  <Input
                    required
                    name={ele.name}
                    value={formData[ele.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    type={ele.type}
                    placeholder={ele.placeHolder}
                  />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between flex-col space-y-8">
            <Button type="submit" className="w-full">{footerData.button}</Button>
            <div>
              <span>{footerData.msg} </span>
              <a href={`/${footerData.link}`} className="text-primary hover:underline">
                {footerData.link}
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Form;
