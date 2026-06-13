import styles from "./popup_styles.module.css";
import {useState, useEffect} from "react";
export function TeamSelection({stateConfig, closePopup, excludedTeams}) {
    const [searchResults, setSearchResults] = useState(nbaTeams.slice(1).map(team => team.abbreviation));

    return (
        <main>
            <SearchBar
                selectedTeam={stateConfig.variable}
                setSearchResults={setSearchResults}
                excludedTeams={excludedTeams}
            />
            <SearchResults
                searchResults={searchResults}
                stateConfig={stateConfig}
                closePopup={closePopup}
            />
        </main>
    )
}

function SearchBar({setSearchResults, selectedTeam, excludedTeams}) {
    
    const allTeams = []
    nbaTeams.forEach(team => allTeams.push(team));

    const [isActive, setIsActive] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const setAvailableSearchResults = useEffect(() => {
        const searchQueryLower = searchQuery.toLowerCase();

        const availableSearchResults = nbaTeams.filter(team => {
            const abbrevLower = team.abbreviation.toLowerCase();
            const teamNameLower = team.fullName.toLowerCase();

            return !excludedTeams.includes(team.abbreviation)     // remove already-selected team and opponent team
                && (abbrevLower.includes(searchQueryLower) || teamNameLower.includes(searchQueryLower));
        });

        setSearchResults(availableSearchResults.map(team => team.abbreviation));
    }, [searchQuery, selectedTeam, excludedTeams]); // ← selectedTeam added

   

    return (
        <section className={`${styles.search_bar_container} ${isActive && styles.active} }`}>
            <img src={magIcon}/>
            <input 
                value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                placeholder="Search name, city or abbreviation"/>
        </section>
    )
}

import { nbaTeams } from "../constants";
function SearchResults({stateConfig, searchResults, closePopup}) {

    const {variable : selectedTeam, setter : setSelectedTeam} = stateConfig;

    return (
        <section className={styles.search_results_section_container}>
            <div className={styles.currently_chosen_container}>
                {selectedTeam ? 
                <TeamCard
                    teamObj = {getTeamFromAbbrev(selectedTeam)}
                    isSelected={true}
                />    
                :
                <p>No team selected.</p>
                }

                
            </div>
            <DividerLine/>
            <div className={styles.search_results_container}>

                {searchResults.length > 0 ? searchResults.map((team) => (
                    <TeamCard
                        key={team}
                        teamObj = {getTeamFromAbbrev(team)}
                        isSelected={false}
                        onClick={() => setSelectedTeam(getTeamFromAbbrev(team).abbreviation)}
                        closePopup = {closePopup}
                    />
                ))
                :
                <p>No teams match that search query, sorry :(</p>
                }
            </div>
        </section>
    )
}

import magIcon from "/src/assets/icons/mag_glass.svg";
import * as NBALogos from "react-nba-logos";
import basketballIcon from "/src/assets/icons/basketball.svg";

import { getTeamFromAbbrev } from "../constants";

function TeamCard({teamObj, isSelected, onClick, closePopup}) {
    const Logo = teamObj ? (NBALogos[teamObj.abbreviation] ?? null) : null;

    return (
        <button 
            className={styles.team_card}
            style = {{
                borderLeft : isSelected ? "solid var(--color-accent-green) 5px" : "solid rgb(0,0,0,0) 5px"
            }}
            onClick={() => {
                if(isSelected) return;
                onClick()
                closePopup()
            }}
        >
            {Logo ? <Logo size="3em" /> : ""}
            
            <p>{teamObj.fullName} ({teamObj.abbreviation})</p>
        </button>
    )
}

function DividerLine() {
    return <div className={styles.divider_line}></div>
}