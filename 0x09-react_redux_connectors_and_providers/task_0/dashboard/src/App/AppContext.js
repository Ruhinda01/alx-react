import React from "react";


export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export function logOut() {
//   user.isLoggedIn = false;
}

const AppContext = React.createContext({
  user: user,
  logOut: logOut
});

export default AppContext;
