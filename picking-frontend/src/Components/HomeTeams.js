import React from 'react';


class HomeTeams extends React.Component {

   

    render() {
        // console.log(this.props.teams)
        return(
            <>
                <div className="team">
                    
                    <p> {this.props.name}</p>
                    <label>
                        <input onChange= {this.props.handlePick} name="hometeam" type="radio" value="userpick" checked= {this.props.radioState} />
                    </label>
                    {/* <img src = {this.props.logo} alt = {this.props.name} className = "Nfl-logo" /> */}
                </div>
        
               
            </>
        )
    }
}

export default HomeTeams;