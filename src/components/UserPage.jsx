import React,{useState,useEffect} from 'react';
import {Switch, Route } from 'react-router-dom';
import UserMenu from './UserMenu';
import Home from '../pages/Home';
import Cources from '../pages/Cources';
import Timetable from '../pages/Timetable';
import  API from '../API.json';
import axios from 'axios';

function UserPage({codeMS}){
    const [student, setStudent] = useState({
        firstname: "",
        lastname:"",
        course:"",
        photo:""
    });
    // const [assignments, setAssignments] = useState({
    //     assign :[]
    // });


    const api = API;
    useEffect(()=>{
         axios.post('http://10.1.10.151:7771/authenticate',{
             code: codeMS}).then(res=>console.log(res.data.token)).catch(err=>{console.log(err)});
         
        setStudent(student=>{
            return{...student, firstname:api.firstname_en, lastname:api.lastname_en, course: api.courseNumber, photo: api.photo}
        })
    },[]);
    
    
    return(
        
        <div className='container-wrapper'>
           
                <UserMenu></UserMenu>
                    <Switch>
                         <Route exact path='/'  render={()=><Home student = {api}></Home>}></Route>
                         <Route exact path='/cources' component = {Cources}></Route>
                         <Route exact path='/timetable' component = {Timetable}></Route>
                    </Switch>
           
           

            
        </div>
        
        
    
    )
}

export default UserPage;