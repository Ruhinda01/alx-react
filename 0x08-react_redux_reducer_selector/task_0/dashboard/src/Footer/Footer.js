import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from "../App/AppContext";


function Footer() {
  const { user } = useContext(AppContext);
    return (
        <div className={css(FootStyles.Footer)}>
          { user.isLoggedIn && (
            <p>
              <a href="#">Contact us</a>
            </p>
          )}
          <p>
            Copyright {getFullYear()} - {getFooterCopy()}
          </p>
        </div>
    );
}

const FootStyles = StyleSheet.create({
  Footer: {
    textAlign: "center",
    fontSize: "0.8rem",
    fontStyle: "italic"
  }
});

export default Footer;
