import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserMenu from './UserMenu';
import Home from '../pages/Home';
import Cources from '../pages/Cources';
import Timetable from '../pages/Timetable';
import ProgressBar from './ProgressBar';
function UserPage(){
    return(
        <div className='container-wrapper'>
            <Router>
                <UserMenu></UserMenu>
                    <Switch>
                         <Route path='/' exact component = {Home}></Route>
                         <Route path='/cources' component = {Cources}></Route>
                         <Route path='/timetable' component = {Timetable}></Route>
                    </Switch>
            </Router>
            <ProgressBar></ProgressBar>
            <div className='footer'>
                <div className='text-center'><span className='footer-text'>AITU Digital University 2020</span></div>
            </div>

            
            
        </div>
    )
}

export default UserPage;