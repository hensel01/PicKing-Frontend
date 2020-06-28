import React from 'react';
import MatchupsContainer from "../Containers/MatchupsContainer"


class RegularSeason extends React.Component {
    state = {
        matchups: [],
        teams: [],
        userPick: [],
        HomeRadioState: false,
        AwayRadioState: false,
        round: 1
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
   

      handleAwayPick = () => {
          this.setState({AwayRadioState: !this.state.AwayRadioState})
      }

      handleHomePick = () => {
        this.setState({HomeRadioState: !this.state.HomeRadioState})
    }

      changeWeekForward = () => {	
        this.setState({round: this.state.round + 1})	
      }	
      
      changeWeekBackward = () => {	
         this.setState({round: this.state.round -1 })
      }

    render() {
      const filteredMatchups = this.state.matchups.filter(matchups => matchups.round_id === this.state.round)
      const filteredHomeTeams = filteredMatchups.filter(matchup=>matchup.hometeam_id).map(el => el.hometeam_id)
      const filteredAwayTeams = filteredMatchups.filter(matchup=>matchup.awayteam_id).map(el => el.awayteam_id)
        return(
            <>
                <div className="regularSeason">
                    <p>Week{this.state.round}</p>
                </div>

                <div className = "changeweek">
                    <button onClick = {this.changeWeekForward}>Next Week</button>
                    <button onClick = {this.changeWeekBackward}>Previous Week</button>
                </div>
        
                <MatchupsContainer  matchups = {filteredMatchups} HomeRadioState ={this.handleHomePick}  AwayRadioState ={this.handleAwayPick} />
            </>
        )
    }
}


export default RegularSeason;