import { AuthContextProps, Nullable } from "./AuthContext.props";
import React, { createContext, useLayoutEffect, useState } from "react";
import { UserProps, LayoutProps } from "@interfaces";
import { createUser, getUserById, loginUser } from "@api";
import { writeToStorage } from "@utils";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  signup: (data: Partial<UserProps>) => null,
  login: (_data: UserProps) => null,
  logout: () => null,
});

export const AuthProvider: React.FC<LayoutProps> = ({ children }) => {
  const [user, setUser] = useState<Nullable<UserProps>>(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const signup = async ({
    id,
    username,
    email,
    password,
  }: Partial<UserProps>) => {
    await createUser<Partial<UserProps>>({
      id,
      username,
      email,
      password,
    });

    // if(result){

    //   writeToStorage("userId",id,"localStorage")
    //   navigate("/posts")
    // }
  };
  const login = async (data: UserProps) => {
    const result = await loginUser<UserProps[]>({ email: data.email });
    if (result[0] && result[0].password === data.password) {
      writeToStorage("userId", result[0].id, "localStorage");
      navigate("/posts");
    } else {
      if (!result[0]) {
        alert("Email is incorrect!");
        return;
      }
      if (result[0].password !== data.password) {
        alert("Password is incorrect!");
        return;
      }
    }
  };
  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  useLayoutEffect(() => {
    const getUser = async () => {
      if (userId) {
        const result = await getUserById<UserProps>(userId);
        setUser(result);
      }
    };
    getUser();
  }, [userId]);
  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
