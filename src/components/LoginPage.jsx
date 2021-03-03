import React,{useState} from 'react';
import {Button, FormGroup, Label, NavLink} from 'reactstrap';
import {AvField, AvForm} from 'availity-reactstrap-validation';
import Proptypes from 'prop-types';

async function loginUser(credentials){
  return fetch('http://10.1.10.151:7771/authenticate',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
  .then(data=>data.json())
}


function LoginPage({setToken, codeMS}){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isValid, setIsValid] = useState(true);
    

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username, password, codeMS
        });
        setToken(token.token);
        console.log(token.token);
        if(!token.ok){
          setIsValid(false);
        }
    }
    
    const msalSubmit = async e =>{
      
      const token = await loginUser({
        codeMS
      });
      setToken(token.token);
      if(!token.ok){
        setIsValid(false);
      }
    }
  
    return(
      <>
      <div className='login-form'>
        <AvForm>
            <h1 className='text-center'>
        <span className='text-weight-bold'>AITU Digital portal</span>
        </h1>
        <FormGroup>
          <Label>Username</Label>

          <AvField name="username" type="text" placeholder='Enter your username here' id='username' validate={{
            required: {value: true, errorMessage: 'This field is requiered'},
          }} onChange={e=>setUsername(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <AvField name="userpass" type="password" placeholder='Enter your password here' id="password" validate={{
            required: {value: true, errorMessage: 'This field is requiered'},
          }} onChange={e=>setPassword(e.target.value)}/>
        </FormGroup>
        {
          isValid ?
          <p>Entering</p>
          :
          <p>Invalid username or password</p>
        }
        
        <Button className='btn-lg btn-dark btn-block' onClick={handleSubmit}> Sign in</Button>
        
        
          <NavLink className='text-center pt-3'  href="https://login.microsoftonline.com/158f15f3-83e0-4906-824c-69bdc50d9d61/oauth2/v2.0/authorize?client_id=9f15860b-4243-4610-845e-428dc4ae43a8&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&response_mode=query&scope=offline_access%20user.read%20mail.read&state=12345">Sign in with Microsoft</NavLink>
        </AvForm>
        </div>
        </>
        
        
    )}
    LoginPage.propTypes = {
      setToken: Proptypes.func.isRequired
  };
export default LoginPage;