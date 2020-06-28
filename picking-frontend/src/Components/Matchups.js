import React from 'react';


class Matchups extends React.Component {

    state = {
        clicked: false
    }

   handleClick = (e) => {
       this.setState({clicked: !this.state.clicked})
   }

    render() {
    
        return(
            <>
                <div className="matchup">
                    <p onClick = {this.handleClick} id="textP" 
                    style={ this.state.clicked ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }> 
                    {this.props.awayteam.name}</p> 
                    vs 
                    <p onClick = {this.handleClick} id="textP" 
                    style={ this.state.clicked ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }>
                    {this.props.hometeam.name}</p> 
                </div>
        
               
            </>
        )
    }
}

export default Matchups;