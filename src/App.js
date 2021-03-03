import './App.css';
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import useToken from './helpers/useToken';
function App() {
  let query = new URLSearchParams(useLocation().search);
  const {token, setToken} = useToken();
  const codeMS = query.get("code");
  return(
    <>
    <Router>
      <LoginPage setToken={setToken} codeMS={codeMS}></LoginPage>
      <Switch>
        
        {
          // token || codeMS?
          //   <Route path = '/' render={()=><UserPage codeMS={codeMS} ></UserPage>}/>
          //   : 
          //   <Route exact path='/' render={()=><LoginPage setToken={setToken} codeMS={codeMS}></LoginPage>}/>
          

          
        }
      </Switch>
    </Router>
    
    </>
  )
}

export default App;
