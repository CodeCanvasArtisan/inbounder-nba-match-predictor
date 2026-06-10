import { Heading } from "../global_components/Headings";
import styles from "./popup_styles.module.css";
export function Popup({mainContent, headingCopy}) {
    return (
        <div className={styles.popup_wrapper}>
            <div className={styles.popup_container}>
                <CloseButton/>
                <Heading contents={headingCopy}/>
                {mainContent}
            </div>
        </div>
    )
}

export function BlurOverlay() {
    return <div className={styles.blur_overlay}></div>
}

import closeIcon from "/src/assets/icons/cross.svg";
function CloseButton() {
    return <button className={styles.close_btn}><img src={closeIcon}/></button>
}