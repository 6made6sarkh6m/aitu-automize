import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import useToken from './helpers/useToken';
function App() {
  
  const {token, setToken} = useToken();
  
 
  return(
    <>
    <Router basename={'/portal'}>
      <Switch>
        {
          !token ? 
          <Route exact path='/' render={()=><LoginPage setToken={setToken}  ></LoginPage>}/>
          :
          <Route   path = '/' render={()=><UserPage token={token} ></UserPage>}/>
        }
          
      </Switch>
    </Router>
    
    </>
  )
}

export default App;
