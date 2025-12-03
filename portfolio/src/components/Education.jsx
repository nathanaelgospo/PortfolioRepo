import styles from "./Education.module.css"

export default function Education() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                The Ohio State University
            </div>
            <div className={styles.degree}>
                B.S. in Computer Science and Engineering
                <span>Aug 2023 - Dec 2026</span>
            </div>
            <div className={styles.gpa}>
               <strong>GPA:</strong> 3.93/4.0
            </div>

            <div className={styles.description}>
                <span>
                   <strong>Activities and societies:</strong> Student Leader in Cru At Ohio State 
                   </span>
                <span> <strong>Honors:</strong> Deans List AU 2023, SP 2024, AU 2024, SP 2025 (4/4 Semesters)</span>
        </div>
        </div >
    )
}