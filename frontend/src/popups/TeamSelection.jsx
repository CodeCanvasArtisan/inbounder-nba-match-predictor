import styles from "./popup_styles.module.css";
import {useState} from "react";
export function TeamSelection() {
    return (
        <main>
            <SearchBar/>
            <SearchResults
                searchResults={["MIN", "ATL", "MIL", "LAC", "DEN"]}
            />
        </main>
    )
}

function SearchResults({searchResults=[], selectedTeam={}}) {
    
    return (
        <section className={styles.search_results_section_container}>
            <div className={styles.currently_chosen_container}>
                <TeamCard
                    teamObj = {getTeamFromAbbrev("LAL")}
                    isSelected={true}
                />
            </div>
            <DividerLine/>
            <div className={styles.search_results_container}>
                {searchResults.map((team) => (
                    <TeamCard
                        teamObj = {getTeamFromAbbrev(team)}
                        isSelected={false}
                    />
                ))}
            </div>
        </section>
    )
}

import magIcon from "/src/assets/icons/mag_glass.svg";
import * as NBALogos from "react-nba-logos";
import basketballIcon from "/src/assets/icons/basketball.svg";

import { getTeamFromAbbrev } from "../constants";

function TeamCard({teamObj, isSelected}) {
    console.log(teamObj)
    const Logo = teamObj ? (NBALogos[teamObj.abbreviation] ?? null) : null;

    return (
        <button 
            className={styles.team_card}
            style = {{
                borderLeft : isSelected ? "solid var(--color-accent-green) 5px" : "solid rgb(0,0,0,0) 5px"
            }}
            onClick={() => {
                if(isSelected) return;
                alert(`Select ${teamObj.fullName}`)
            }}
        >
            {Logo ? <Logo size="3em" /> : ""}
            
            <p>{teamObj.fullName} ({teamObj.abbreviation})</p>
        </button>
    )
}

function SearchBar({stateConfig}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <section className={`${styles.search_bar_container} ${isActive && styles.active} }`}>
            <img src={magIcon}/>
            <input 
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                placeholder="Search name, city or abbreviation"/>
        </section>
    )
}
function DividerLine() {
    return <div className={styles.divider_line}></div>
}