import React from 'react';


class Matchups extends React.Component {

   

    render() {
      
        return(
            <>
                <div className="matchup">
                    {/* <p>{this.props.name}</p> */}
                    <p>{this.props.hometeam_id}</p>
                    <p>{this.props.awayteam_id}</p>
                    {/* <img src = {this.props.logo} alt = {this.props.name} className = "Nfl-logo" /> */}
                </div>
        
               
            </>
        )
    }
}

export default Matchups;