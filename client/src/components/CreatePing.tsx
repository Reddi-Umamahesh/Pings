import { userState } from "@/recoil/userAtom";
import { ping_api_endpoint } from "@/utils/constant";
import { useRecoilValue } from "recoil";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const CreatePing = () => {
    const navigate = useNavigate()
    const user = useRecoilValue(userState)
    if (!user) {
        toast.error("you must login to create a ping")
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        return null
    }
    const action = `${ping_api_endpoint}` + "/create";
   
  return (
    <div className="flex flex-col">
      <form action={action} method="post" encType="multipart/from-data">
        <div>
          <label htmlFor="">username</label>
          <Input type="text" name="username" id="" />
        </div>
        <div>
          <label htmlFor="">message</label>
          <Input name="bio" type="text" />
        </div>
        <div>
          <label htmlFor="">email</label>
          <Input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="">password</label>
          <Input type="text" name="password" />
        </div>
        <Input type="file" name="avatar" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePing;
