import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: isLoggedInprop, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInprop);
  const logUserIn = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };
  const logUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, logUserIn, logUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};
export const useLogIn = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return;
};

export const useLogOut = () => {
  const { isLoggedOut } = useContext(AuthContext);
  return;
};
