import styles from "./bouncing_basketball.module.css";

export function BouncingBasketball() {
    return (
        <div className={styles["court-area"]}>
        {/*1. Tracks Horizontal Movement*/}
        <div className={styles["horizontal-mover"]}>
            
            {/*2. Tracks Vertical Movement*/}
            <div className={styles["vertical-bouncer"]}>
            <svg className={styles.basketball} viewBox="0 0 100 100" width="50" height="50">
               {/* Minimalist Flat-Shading Group */}
                <g>
                {/* Base Flat Color */}
                <circle cx="50" cy="50" r="46" fill="#FF6B35" />
                {/* Modern semi-transparent crescent overlay for a subtle minimalist depth */}
                <path d="M 50 4 A 46 46 0 0 1 96 50 A 46 46 0 0 0 50 4 Z" fill="rgba(0,0,0,0.06)" />
                </g>
                
                {/* Outer Stroke */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="#1A1A1A" strokeWidth="4.5"/>
                
                {/* Clean, Simplified Iconic Seams */}
                <path d="M 50 4 L 50 96" stroke="#1A1A1A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M 4 50 L 96 50" stroke="#1A1A1A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M 17 17 Q 50 50 17 83" stroke="#1A1A1A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M 83 17 Q 50 50 83 83" stroke="#1A1A1A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
            </svg>
            </div>

            {/* Dynamic Floor Shadow */}
            <div className={styles["ball-shadow"]}></div>
            
        </div>
        </div>
    );
}