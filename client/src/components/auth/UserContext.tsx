import React, { createContext, ReactNode, useContext, useState } from "react";

interface FormData {
    email: string,
    password: string,
    username?: string;
    bio?: string;
}

interface UserContextType {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }
    return context;
}
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
     const [formData, setFormData] = useState<FormData>({
       email: "",
       password: "",
       username: "",
       bio: "",
     });

     return (
       <UserContext.Provider value={{ formData, setFormData }}>
         {children} 
       </UserContext.Provider>
     );
}