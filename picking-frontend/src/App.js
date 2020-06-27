import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { Redirect  } from 'react-router-dom';
import Welcome  from './Components/Welcome'
import Navbar from './Components/Navbar'
import MatchupsContainer from './Containers/MatchupsContainer'



class App extends React.Component {

state = {
  users: [],
  currentUser: null,
  matchups: [],
  teams: [],
  round: 1,
  hometeamID: [],
  awayteamID: []
}

componentDidMount() {
  this.fetchUsers()
  this.fetchMatchups()
  this.fetchTeams()
}

fetchUsers = () => {
  fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(users => this.setState({users}))
}

fetchMatchups = () => {
  fetch('http://localhost:3000/matchups')
  .then(resp => resp.json())
  .then(matchups => this.setState({matchups}))
}

fetchTeams = () => {
  fetch('http://localhost:3000/teams')
  .then(resp => resp.json())
  .then(teams => this.setState({teams}))
}

changeWeekForward = () => {
  this.setState({round: this.state.round + 1})
}

changeWeekBackward = () => {
   this.setState({round: this.state.round -1 })
}




  render() {
    const roundFilteredMatchups = this.state.matchups.filter(matchup => matchup.round_id === this.state.round)
  return (
    <div>
      <Navbar />

      <div>
        <button onClick = {this.changeWeekForward}> Next Week</button>
        <button onClick = {this.changeWeekBackward}> Previous Week</button>
      </div> 
       
  
       <Switch>
         <Route path ="/welcome" render={(props) => <Welcome  /> }/>
         <Route path ="/matchups" render={(props) => <MatchupsContainer  teams={this.state.teams} matchups={roundFilteredMatchups} /> }/>
       </Switch>
    </div>
    );
  }
}

export default App;
