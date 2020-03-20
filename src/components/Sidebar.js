import React from "react";
import {Link} from "react-router-dom"
import { Drawer } from '@material-ui/core'

class Sidebar extends React.Component {
    
    
    render() {
        return (
            <Drawer variant="permanent" open="true">
                <img src="/profile.png" alt="Profile Pic"/>
                <Link to="/integration">Integration</Link>    
                <Link to="/analytics">Analytics</Link>    
                <Link to="/reports">Reports</Link>    
                <Link to="/insights">Insights</Link>    
                <Link to="/contact-us">Contact Us</Link>    
            </Drawer>
              
        );
    }

}

export default Sidebar;