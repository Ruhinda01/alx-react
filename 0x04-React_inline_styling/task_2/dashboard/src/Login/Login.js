import React from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
    return (
        <>
            <div className={css(styles["AppBody"])}>
              <p>
                Login to access the full dashboard
              </p>
              <form>
                <label htmlFor="email">Email: </label>
                <input className={css(styles.input)} type="email" name="email" id="email" />
                <label htmlFor="password">Password: </label>
                <input className={css(styles.input)} type="password" name="password" id="password" />
                <button>OK</button>
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
  },

  input: {
    margin: "10px",
  }
});

export default Login;
