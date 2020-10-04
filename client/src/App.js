import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppNavbar from "./components/AppNavbar";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard"
import PrivateRoute from "./components/route/PrivateRoute";
import {getAuthUser} from "./js/actions/authActions";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const getUser= ()=> dispatch(getAuthUser);
 useEffect(() => {
   getUser();
 }, [])
    
  return (
  <BrowserRouter>
  <AppNavbar/>
  <Switch>
    <Route exact path="/" component= {Home}/>
    <PrivateRoute path="/dashboard" component= {Dashboard}/>
  </Switch>
  </BrowserRouter>
  );
}

export default App;
