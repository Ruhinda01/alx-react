import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';


function Footer() {
    return (
        <div className={css(FootStyles.Footer)}>
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
