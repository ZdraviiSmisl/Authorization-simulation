import React from "react";

//In the object we specify default value. Valuers of propertties  or number  this one  can be chaged in Provdier
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
