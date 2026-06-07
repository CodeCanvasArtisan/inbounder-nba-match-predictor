import styles from "./parameter_selection.module.css";
import { getTeamFromAbbrev } from "../../constants";
export function MatchupSelection() {
    return (
        <main className={styles.matchup_selection_container}>
            <div className={styles.top_row}>
                <p>HOME</p>
                <p style={{color : "rgb(0,0,0,0)", paddingLeft : "0"}}>a</p>
                <p>AWAY</p>
            </div>
            <div className={styles.team_cards_container}>
                <TeamSelectionArea
                    teamObj={getTeamFromAbbrev(null)}
                />
                <p style={{
                    color : "#FBFBFB80"
                }}>@</p>

                <TeamSelectionArea
                    teamObj={getTeamFromAbbrev("MIN")}
                />
            </div>
        </main>
    )
}

import basketballIcon from "/src/assets/icons/basketball.svg";
import * as NBALogos from "react-nba-logos"

function TeamSelectionArea({teamObj, isHome}) {

    const Logo = teamObj ? (NBALogos[teamObj.abbreviation] ?? null) : null;
    console.log("team -> ", teamObj);
    return (
        <button 
            className={styles.team_selection_container}
            style = {{
                background : teamObj.accentColour,
                color : teamObj.secondaryColour,
                border : "solid #FBFBFB80 1px"
            }}
        
        >
            {Logo ? <Logo size="3em" /> : <img src={basketballIcon} />}
            <p style = {{color : teamObj.secondaryColour}}>
                {teamObj.fullName}
                {teamObj.abbreviation && (
                    ` (${teamObj.abbreviation})`
                )}
            </p>
        </button>
    )
}
