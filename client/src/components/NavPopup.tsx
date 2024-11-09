import React from 'react'
import { logout } from './auth/Form';
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, userState } from '@/recoil/userAtom';

const NavPopup:React.FC = () => {
    const navigate = useNavigate();
    const setAuthToken = useSetRecoilState(authState);
    const setUser = useSetRecoilState(userState);
    const user = useRecoilValue(userState);
  return (
    <div>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="h-10 w-10 border border-white ">
              <AvatarImage src={user?.avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex gap-4 space-y-2">
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium text-black">
                  {user?.username}'s Home
                </h4>
                <p className="text-sm text-muted-foreground">
                  {user?.bio || ""}
                </p>
              </div>
            </div>
            <Button className='border-none' variant="link">
              <Link to="/profile">view profile</Link>
            </Button>
            <div className="flex w-fit items-center gap-2 cursor-pointer px-3">
              <LogOut />
                          <Button
                              className='px-2'
                onClick={() => logout(navigate, setAuthToken, setUser)}
                variant="link"
              >
                logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default NavPopup