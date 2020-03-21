import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import '../assets/header.css'

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <p style={{width: '50%', marginLeft: '8rem'}}>Hi, Dean Test User</p>
                    <div style={{width: '50%', textAlign: 'right'}}>
                        <img src="/logo.jpg" alt="Company Logo"/>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }

}

export default Header;