import React,{useState,useEffect} from 'react';
import {Switch, Route } from 'react-router-dom';
import UserMenu from './UserMenu';
import Home from '../pages/Home';
import Cources from '../pages/Cources';
import Timetable from '../pages/Timetable';
import Questionnaire from '../pages/Questionnaire';
import  API from '../API.json';




function UserPage({token}){
    
    const [student, setStudent] = useState({
        firstname: "",
        lastname:"",
        course:"",
        photo:""
    });

    const api = API;
    useEffect(()=>{
        setStudent(student=>{
            return{...student, firstname:api.firstname_en, lastname:api.lastname_en, course: api.courseNumber, photo: api.photo}
        })
    },[]);

    
    
    
    return(
        
        <div className='container-wrapper'>
                <UserMenu></UserMenu>
                    <Switch>
                         <Route exact path='/'  render={()=><Home student = {token.id}></Home>}></Route>
                         <Route exact path='/cources' render={()=><Cources token = {token.id}></Cources>}></Route>
                         <Route exact path='/timetable' component = {Timetable}></Route>
                         <Route exact path = '/questionnaire' component={Questionnaire}></Route>
                    </Switch>
           
           

            
        </div>
        
        
    
    )
}

export default UserPage;