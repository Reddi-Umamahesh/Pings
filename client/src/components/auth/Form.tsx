import React from "react";

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

interface InputData {
  name: string;
  label: string;
  placeHolder: string;
  type: string;
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
  const action = `${user_api_endpoint}`+route
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
        <form action={action} method="post">
          <CardContent>
            <div className="grid w-full items-center gap-4">
              {bodyData.map((ele, index) => (
                <div key={index} className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{ele.label}</Label>
                  <Input
                    name={ele.name}
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
