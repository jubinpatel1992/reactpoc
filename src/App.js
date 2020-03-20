import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Integration from './pages/Integration'
import Reports from './pages/Reports'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function BasicExample() {
  return (
    <Router>
      <Header />
      <Sidebar />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/integration" component={Integration}></Route>    
        <Route exact path="/analytics" component={Analytics}></Route>    
        <Route exact path="/reports" component={Reports}></Route>    
        <Route exact path="/insights" component={Insights}></Route>    
        <Route exact path="/contact-us" component={Contact}></Route> 
      </Switch>
    </Router>
  );
}