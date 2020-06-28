import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { Redirect  } from 'react-router-dom';
import Welcome  from './Components/Welcome'
import Navbar from './Components/Navbar'
import RegularSeason from './Components/RegularSeason'




class App extends React.Component {

state = {
  users: [],
  currentUser: null
}
  render() {
  return (
    <div>
      <Navbar />
       <Switch>
         <Route path ="/welcome" render={(props) => <Welcome  /> }/>
         <Route path ="/regularseason" render={(props) => <RegularSeason  /> }/>
       </Switch> 
    </div>
    );
  }
}

export default App;

