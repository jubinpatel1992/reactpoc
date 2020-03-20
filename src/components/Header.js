import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import '../assets/header.css'

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <p>Hi, Dean Test User</p>
                    <img src="/logo.jpg" alt="Company Logo"/>
                </Toolbar>
            </AppBar>
        );
    }

}

export default Header;