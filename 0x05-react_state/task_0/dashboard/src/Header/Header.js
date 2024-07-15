import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
    <div className={css(HeaderStyles.Header)}>
        <img src={logo} className={css(HeaderStyles.HeaderImg)} alt="logo" />
        <h1 className={css(HeaderStyles.HeaderH1)}>School dashboard</h1>
    </div>
    );
}

const HeaderStyles = StyleSheet.create({
    Header: {
        backgroundColor: "white",
        borderBottom: "3px solid red",
        display: "flex",
        alignItems: "center",
    },

    HeaderImg: {
        width: "200px",
        height: "auto",
        marginRight: "20px",
        marginLeft: "20px",
    },

    HeaderH1: {
        color: "red",
        fontSize: "1.4rem",
        display: "inline",
    }
});

export default Header;
