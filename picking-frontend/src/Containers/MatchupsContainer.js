import React from 'react';
import Matchups from "../Components/Matchups"


class MatchupsContainer extends React.Component {
   



   
    render() {
        // console.log(this.props.teams)
        return(
            <>
            
            {this.props.matchups.map(matchup => 
            <Matchups key={matchup.id} {...matchup} AwayRadioState = {this.props.AwayRadioState} HomeRadioState ={this.props.HomeRadioState} handlePick = {this.props.handlePick} />)}


            
            </>
        )
    }
}

export default MatchupsContainer;