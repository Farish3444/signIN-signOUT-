// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login1 from './Components/Login1';
import notFound from './Components/notFound';
import NewUserLogin from './Components/newUserLogin';
import { BrowserRouter as 
Router,
Route,
Link,
Switch,
Redirect, 
BrowserRouter
}
from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
import OtpConfirm from './Components/OtpConfirm';
import dashBoard from './Components/dashBoard';


<<<<<<< HEAD

=======
>>>>>>> c99428dbb8c8a0d1c3bcce78fc987fad67c561de
function App() {
  return (
    <Router>
  <Switch>
  <Route path='/'  exact component={Login1}/>
  <Route path='/ForgotPassword' component={ForgotPassword}/>
  <Route path='/new-User' exact={true} component={NewUserLogin} />
  <Route path="/OtpConfirm" component={OtpConfirm} />
  <Route path="/dashBoard" component={dashBoard} />
  <Route path='/notFound'  component={notFound} />
  <Redirect to='/notFound'/>
  </Switch>
  </Router>
  );
}

export default App;



// git remote set-url origin git@github.com:Farish3444/REACT-SIGN-UP-PAGES.git
// git branch -M main
// git push -u origin main


// push by the guide