import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserMenu from './UserMenu';
import Home from '../pages/Home';
import Cources from '../pages/Cources';
import Timetable from '../pages/Timetable';
import  API from '../API.json';

function UserPage({userData}){
    console.log(userData.email);
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
        
//     axios.get('https://10.1.11.30:8020/savesnapshotservice/snapshot/announcing?id=1').then(res=>{
//     let results = res.data;    
//     setAssignments(assignments=>{
//         return{...assignments, assign:results}

//     }
//     )
//     console.log(results);

// }).catch(err=>{console.log(err)});
        setStudent(student=>{
            return{...student, firstname:api.firstname_en, lastname:api.lastname_en, course: api.courseNumber, photo: api.photo}
        })
    },[]);
    
    
    return(
        <Router>
        <div className='container-wrapper'>
           
                <UserMenu></UserMenu>
                    <Switch>
                         <Route path='/' exact render={()=><Home student = {api}></Home>}></Route>
                         <Route path='/cources' component = {Cources}></Route>
                         <Route path='/timetable' component = {Timetable}></Route>
                    </Switch>
           
           

            
        </div>
        
        
        </Router>
    )
}

export default UserPage;