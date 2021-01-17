import './App.css';
import {useState} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
function App() {
  let history = useHistory();
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
        history.push('/home');
    }
  return(
    <Switch>
      <Route exact path='/' render={()=><LoginPage userType={userType} submitForm={submitForm}></LoginPage>}>
      </Route>
      <Route path='/home' render={()=><UserPage userData={userData}></UserPage>}></Route>
      </Switch>
  )
}

export default App;
