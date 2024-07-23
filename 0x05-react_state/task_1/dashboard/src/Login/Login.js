import React, { useState, useEffect } from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
      <>
          <div className={css(styles["AppBody"])}>
            <p>
              Login to access the full dashboard
            </p>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="email">Email: </label>
              <input className={css(styles.input)} type="email" name="email" id="email" value={email} onChange={handleChangeEmail} />
              <label htmlFor="password">Password: </label>
              <input className={css(styles.input)} type="password" name="password" id="password" value={password} onChange={handleChangePassword} />
              <input type="submit" value="OK" disabled={!enableSubmit} />
            </form>
          </div>
      </>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    borderBottom: "3px solid red",
    fontSize: "1rem",
    textAlign: "left",
    padding: "2rem",
    height: "100vh",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    }
   },

  input: {
    margin: "10px",
  }
});

export default Login;
