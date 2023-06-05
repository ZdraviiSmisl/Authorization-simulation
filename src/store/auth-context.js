import React, { useState, useEffect } from "react";

/**
 *React context is great for app-wide or component-wide. So essantially state that affects multiple components.It's not a replacement for componen configuretion. Don't use context for reusable components.Needs to be used the props to configure them. Otherwise we can't use them for everything else ohter than what we you configured in context
 */

//In the object we specify default value. Values of propertties  or number of  this one  can be chaged in Provdier
const AuthContext = React.createContext({
  isLoggedIn: false,
  //We you this dummy funciton as a default property(it woun't be used anywhere)just to auto-complition where we use the context
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default AuthContext;

//Since we can use default export once for every module(file) I did a named export below

//We can create(it isn't mandatory,but this is a good case for refactoring) standalone file for managing the context(costom context provider componet). And move all the logic relates to user authentication from App to make it cliner

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //I use useEffect(confiuring it as a side effect accordingly) hook here in order to avoid infinite loop and code inside does not run for every re-render component cycle

  useEffect(() => {
    const logedInUserStatus = localStorage.getItem("isLoggedIn");
    //Here we save a persistent(and check it) user session after re-rendering page
    if (logedInUserStatus === "log in") {
      setIsLoggedIn(true);
    }
  }, []);

  const LoginHandler = () => {
    localStorage.setItem("isLoggedIn", "log in");
    setIsLoggedIn(true);
  };

  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: LoginHandler,
        onLogout: LogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
