import SkillContainer from "../components/SkillContainer";
import styles from "./Skills.module.css"

export default function Skills() {

    const javaScriptSkill = { skill: "javascript" };

    return (

        <section id="skills">
            <div className={styles.mainContainer}>
                <h1> My <span className={styles.highlight}> Skills </span></h1>
                <div className={styles.grid}>
                    <SkillContainer skill={javaScriptSkill} />
                </div>
            </div>
        </section>
    );
}