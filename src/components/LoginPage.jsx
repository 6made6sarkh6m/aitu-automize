import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input, NavLink} from 'reactstrap';
function LoginPage(){
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });


   const userType = (e)=>{
    const {id, value} = e.target;
    setUserData(userData=>{
      return{
        ...userData, [id]: value
      }
    });
  }

    function submitForm(e){
        e.preventDefault();
        console.log(userData.email);
        console.log(userData.password);
    }
    return(
      <div className='login-form'>
        <Form>
            <h1 className='text-center'>
        <span className='text-weight-bold'>AITU Automize</span>
        </h1>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Enter your email here" id="email" onChange={userType}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="Enter your password here" id="password" onChange={userType}/>
        </FormGroup>
        <Button className='btn-lg btn-dark btn-block' onClick={submitForm}> Sign in</Button>
          <NavLink className='text-center pt-3' href="#">Don't have an account?</NavLink>
        </Form>
        </div>
    );
}
export default LoginPage;