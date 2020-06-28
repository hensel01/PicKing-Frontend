import React from 'react';
import MatchupsContainer from "../Containers/MatchupsContainer"


class RegularSeason extends React.Component {
    state = {
        matchups: [],
        teams: [],
        round: 1,
        roundFilteredMatchups: [],
        hometeam: [],
        awayteam: [],
        userPick: [],
        radioState: false
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
        const roundFilteredMatchups = this.state.matchups.filter(matchup => matchup.round_id === this.state.round)
        this.setState({roundFilteredMatchups: roundFilteredMatchups})
        const hometeamfiltered = this.state.roundFilteredMatchups.filter(matchup=>matchup.hometeam_id).map(el => el.hometeam_id)
        this.setState({hometeam: hometeamfiltered})
        const awayteamfiltered = this.state.roundFilteredMatchups.filter(matchup=>matchup.awayteam_id).map(el => el.awayteam_id)
        this.setState({awayteam: awayteamfiltered})
      }
      
      changeWeekBackward = () => {
         this.setState({round: this.state.round -1 })
         const roundFilteredMatchups = this.state.matchups.filter(matchup => matchup.round_id === this.state.round)
         this.setState({roundFilteredMatchups: roundFilteredMatchups})
         const hometeamfiltered = this.state.roundFilteredMatchups.filter(matchup=>matchup.hometeam_id).map(el => el.hometeam_id)
         this.setState({hometeam: hometeamfiltered})
         const awayteamfiltered = this.state.roundFilteredMatchups.filter(matchup=>matchup.awayteam_id).map(el => el.awayteam_id)
         this.setState({awayteam: awayteamfiltered})
      }

      handlePick = () => {
          this.setState({radioState: !this.state.radioState})
      }


    render() {
        const filteredHomeTeams = this.state.teams.filter((team) => this.state.hometeam.includes(team.id))
        const filteredAwayTeams = this.state.teams.filter((team) => this.state.awayteam.includes(team.id))
        console.log(filteredHomeTeams)
        return(
            <>
                <div className="regularSeason">
                    <p>Week{this.state.round}</p>
                </div>
                
                <div>
                    <button onClick = {this.changeWeekForward}> Next Week</button>
                    <button onClick = {this.changeWeekBackward}> Previous Week</button>
                </div> 
        
                <MatchupsContainer matchups={this.state.roundFilteredMatchups} filteredHomeTeams={filteredHomeTeams} 
                filteredAwayTeams = {filteredAwayTeams} radioState ={this.state.radioState} handlePick={this.handlePick}/>
            </>
        )
    }
}

export default RegularSeason;