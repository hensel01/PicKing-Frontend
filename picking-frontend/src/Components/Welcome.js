import React from 'react';


class Welcome extends React.Component {
    render() {
        return(
            <>
                <div className="user">
                  <h1>PicKing</h1>
                  <p>Here are the rules:</p>
                  <p>Select all of your preseason predictions. You will see how many points a pick is worth if picked correctly. You will receive the points once the season ends.</p>
                  <p>Each week of the regular season, you will select your picks for the upcoming week. Each pick is is worth 10 points.</p>
                  <p>Playoffs work the same, but will be worth more points.</p>

                </div>
               
            </>
        )
    }
}

export default Welcome;