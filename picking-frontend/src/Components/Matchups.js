import React from 'react';


class Matchups extends React.Component {

   

    render() {
        // console.log(this.props.teams)
        return(
            <>
                <div className="matchup">
                    <p> I am roundid {this.props.round_id}</p>
                    <p>I am homeId {this.props.hometeam_id}</p>
                    <p>I am awayId{this.props.awayteam_id}</p>
                    <p> {this.props.name}</p>
                    {/* <img src = {this.props.logo} alt = {this.props.name} className = "Nfl-logo" /> */}
                </div>
        
               
            </>
        )
    }
}

export default Matchups;