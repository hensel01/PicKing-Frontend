import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { Redirect  } from 'react-router-dom';
import {Welcome} from './Components'

class App extends React.Component {
render() {

  return (
    <div>
       <Switch>
         <Route path ="/welcome" render={(props) => <Welcome  /> }/>
       </Switch>
    </div>
    );
  }
}

export default App;
