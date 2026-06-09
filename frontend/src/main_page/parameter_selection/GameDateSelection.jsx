import styles from "./parameter_selection.module.css";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
export function GameDateSelection() {

    const [daysFromNow, setDaysFromNow] = useState(1);
    const [inXDays, setInXDays] = useState(2);
    const [selectionBoxInfo, setSelectionBoxInfo] = useState({x : 0, y : 0, width : 0, height : 0})

    const updateCustomDate = useEffect(() => setDaysFromNow(inXDays), [inXDays])

    const changeSelectionBoxPosition = (moveToRef, containerRef) => {
        const elem = moveToRef.current;
        setSelectionBoxInfo({
            left: elem.offsetLeft,
            top: elem.offsetTop,
            width: elem.offsetWidth,
            height: elem.offsetHeight,
        });
    }
    return (
        <main className={styles.game_date_selection_wrapper}>
            <div className={styles.game_date_selection_container}>
                <DateOption changeSelectionBox = {changeSelectionBoxPosition} select={() => setDaysFromNow(0)} isSelected = {daysFromNow == 0} option="Today"/>
                <DateOption changeSelectionBox = {changeSelectionBoxPosition} select={() => setDaysFromNow(1)} isSelected={daysFromNow == 1} option="Tomorrow"/>
                <DateOption changeSelectionBox = {changeSelectionBoxPosition} inXDaysConfig={{variable : inXDays, setter : setInXDays}} select={() => setDaysFromNow(inXDays)} isSelected={![0, 1].includes(daysFromNow)} option="inxdays"/>
                <div 
                    className={styles.selection_box}
                    style = {{
                        ...selectionBoxInfo
                    }}
                ></div>
            </div>
            
        </main>
    )
}

function DateOption({changeSelectionBox, option, select, isSelected, inXDaysConfig={}}) {
    const optionRef = useRef(null);
    const changeBoxPosition = useLayoutEffect(() => {
        if(isSelected) changeSelectionBox(optionRef)
    }, [isSelected])


    return (
        <span 
            ref = {optionRef}
            style = {{
                opacity : isSelected ? 1 : 0.5
            }}
            onClick={() => select()}
            className={isSelected ? styles.selected : ""}
        >
            {option == "inxdays" ?
                <InXDaysOption stateConfig={inXDaysConfig} isSelected={isSelected}/>
                :
                <h2>{option}</h2>
            }
        </span>
        
    )
}

import plusIcon from "/src/assets/icons/plus_circle.svg";
import minusIcon from "/src/assets/icons/minus_circle.svg";

function InXDaysOption({stateConfig}) {

    const {variable : numDays, setter : setNumDays} = stateConfig;

    return (
        <div className={styles.inxdays_wrapper}>
            <h2>In</h2>
            <span>
                <button disabled = {numDays <= 1} onClick={() => {
                    if (numDays <= 2) setNumDays(2)
                    else setNumDays(curr => curr - 1)
                }}><img src={minusIcon}/></button>
                <input min={2} max={7} 
                    onChange={e => {
                        setNumDays(e.target.value)
                    }} value={numDays}
                    onBlur={() => {
                        if(numDays > 7) setNumDays(7)
                        else if (numDays > 2 || !numDays) setNumDays(2)
                    }}  
                    />
                <button disabled = {numDays <= 1}
                onClick={() => {
                    if (numDays >= 7) setNumDays(7)
                    else setNumDays(curr => curr + 1)}
                }><img src={plusIcon}/></button>
            </span>
            <h2>days</h2>
        </div>
    )
}