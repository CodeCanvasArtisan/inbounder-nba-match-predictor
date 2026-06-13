import { ActionLink, ButtonPrimary } from "../global_components/Buttons";
import { Heading, Subheading } from "../global_components/Headings";
import styles from "./popup_styles.module.css";


import trophyIcon from "/src/assets/icons/trophy.png";
import shuffleIcon from "/src/assets/icons/shuffle.svg";
export function ResultDisplay({winningTeam, winPercent, closePopup, rerunPrediction, isActive}) {
    return (
        <main className={`${!isActive ? styles.inactive : ""} ${styles.result_display_container}`}>
             
             <section className={styles.info_section}>
                <Heading contents={<img src={trophyIcon}/>}/>
                <Heading contents={winningTeam.fullName}/>
                <h2>{winPercent}% chance</h2>
                <Subheading contents="(based on your inputs)"/>
             </section>

             <section className={styles.button_section}>
                <ButtonPrimary 
                    copy={<>
                        <img src={shuffleIcon}/> <p>Change parameters</p>
                    </>} 
                    onClick={closePopup}
                />
                <ActionLink copy="Rerun prediction" onClick={rerunPrediction}/>
             </section>
        </main>
    )
}