import "react"
import styles from "./parameter_selection.module.css";

export function ParameterSelectionPill() {
 // step number + main content
 return (
    <div className={styles.parameter_pill_container}>
         <header>
            <StepCircle number={1}/>
            Parameter
         </header>
         <main>
            main content
         </main>
    </div>
 )
}

function StepCircle({number}) {
   return <div className={styles.step_circle}>{number}</div>
}

// --------------------------
// Main content for each pill
function MatchupSelection() {

}

function GameDateSelection() {

}