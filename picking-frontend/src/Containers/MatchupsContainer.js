import React from 'react';
import Matchups from "../Components/Matchups"
import AwayTeams from "../Components/AwayTeams"
import HomeTeams from '../Components/HomeTeams'


class MatchupsContainer extends React.Component {
   



   
    render() {
        // console.log(this.props.teams)
        return(
            <>
            {this.props.filteredHomeTeams.map(hometeam => 
            <HomeTeams  key={hometeam.id} {...hometeam} radioState = {this.props.radioState} handlePick= {this.props.handlePick}
            />)}

            {this.props.filteredAwayTeams.map(awayteam => 
            <AwayTeams  key={awayteam.id} {...awayteam} radioState = {this.props.radioState} handlePick= {this.props.handlePick}
            />)}        
            
            {this.props.matchups.map(matchup => 
            <Matchups key={matchup.id} {...matchup}/>)}
            
            </>
        )
    }
}

export default MatchupsContainer;