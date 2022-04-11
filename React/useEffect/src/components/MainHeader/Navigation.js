import React from "react";
import AuthContext from "../store/authContext";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav} >
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.consumer>
  );
};

export default Navigation;
