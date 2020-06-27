import React from 'react';
import Matchups from "../Components/Matchups"


class MatchupsContainer extends React.Component {
   



   
    render() {
        return(
            <>
                 {this.props.teams.map(team => 
                 <Matchups  key={team.id} {...team} 
                 />)}
                 
                 {this.props.matchups.map(matchup => 
                    <Matchups key={matchup.id} {...matchup}/>)}
            </>
        )
    }
}

export default MatchupsContainer;