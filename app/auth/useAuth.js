import { useContext } from 'react';

import AuthContext from './context';
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);

    setUser(user);
    authStorage.storeToken(authToken);
  }

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  }

  return { user, setUser, logIn, logOut };
}
