import React,{useState,useEffect} from 'react';
import {Button, FormGroup, Label, NavLink, Spinner} from 'reactstrap';
import {AvField, AvForm} from 'availity-reactstrap-validation';
import Proptypes from 'prop-types';
//import axios from 'axios';
import {useLocation} from 'react-router-dom';
// import axios from 'axios';


function GetParam(){
  return new URLSearchParams(useLocation().search);
}

function LoginPage({setToken}){
    let query = GetParam().get("code");
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    //http://10.1.10.151:7771/authenticate
    // https://tomcat.astanait.edu.kz:8020/mark
    async function loginUser(credentials){
      return fetch('https://tomcat.astanait.edu.kz:8020/mark/authenticate',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      })
      .then(data=>data.json());//then(res=>console.log(res));//.then(res=>setToken({res}.token));
    }
    
    
   
   useEffect(()=>{
    if(query!=null){
      const msalToken =  loginUser({code: query});
       msalToken.then(res=>
         res.ok?
         setToken(res)
         :
         setErrorMessage(res));
      
    }
   },[query])

    const handleSubmit = async e => {
        e.preventDefault();
         const token = await loginUser({
            username, password
        })
        if(token.error){
          setIsValid(false);
        }else{
          setToken(token);
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
        
        
        <Button className='btn-lg btn-dark btn-block' onClick={handleSubmit}> Sign in</Button>
          {
            isValid?<p>Signing in</p>:<p>Invalid username or password</p>
          }
          <p>{errorMessage.error}</p>
          {
            query?
            <>
            <p>Redirecting to your user page</p>
            <Spinner size='sm' color='secondary'></Spinner>
            </>
            :
            null
          }
        
        <NavLink className='text-center pt-3'  href="https://login.microsoftonline.com/158f15f3-83e0-4906-824c-69bdc50d9d61/oauth2/v2.0/authorize?client_id=9f15860b-4243-4610-845e-428dc4ae43a8&response_type=code&redirect_uri=https%3A%2F%2Ftomcat.astanait.edu.kz:8020/portal&response_mode=query&scope=offline_access%20user.read%20mail.read&state=12345">Sign in with Microsoft</NavLink>
          {/* <NavLink className='text-center pt-3'  href="https://login.microsoftonline.com/158f15f3-83e0-4906-824c-69bdc50d9d61/oauth2/v2.0/authorize?client_id=9f15860b-4243-4610-845e-428dc4ae43a8&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&response_mode=query&scope=offline_access%20user.read%20mail.read&state=12345">Sign in with Microsoft</NavLink> */}
        </AvForm>
        </div>
        </>
        
        
    )}
    LoginPage.propTypes = {
      setToken: Proptypes.func.isRequired
  };
export default LoginPage;

//https://tomcat.astanait.edu.kz:8020/portal