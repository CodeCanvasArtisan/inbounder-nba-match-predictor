import "react"
import styles from "./parameter_selection.module.css";
import { MatchupSelection } from "./MatchupSelection.jsx";

export function ParameterSelectionPill({stepNo, paramName, mainContent}) {
 // step number + main content
 return (
    <div className={styles.parameter_pill_container}>
         <header>
            <StepCircle number={stepNo}/>
            {paramName}
         </header>

         {mainContent}
    </div>
 )
}

function StepCircle({number}) {
   return <div className={styles.step_circle}>{number}</div>
}



function GameDateSelection() {

}