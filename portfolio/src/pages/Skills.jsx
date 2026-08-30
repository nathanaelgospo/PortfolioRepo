import SkillContainer from "../components/SkillContainer";
import styles from "./Skills.module.css"
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import typescript from "../assets/typescript.png";
import cSharp from "../assets/cSharp.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import ruby from "../assets/ruby.png";
import sql from "../assets/sql.png";
import FastAPI from "../assets/FastAPI.png"
import Aws from "../assets/aws.png"


export default function Skills() {

    const javaScriptSkill = { skill: "Javascript", image: javascript };
    const javaSkill = { skill: "Java", image: java };
    const htmlSkill = { skill: "HTML", image: html };
    const cssSkill = { skill: "CSS", image: css };
    const reactSkill = { skill: "React", image: react };
    const gitSkill = { skill: "Git/Github", image: git };
    const typeScriptSkill = { skill: "Typescript", image: typescript };
    const cSharpSkill = { skill: "C#", image: cSharp };
    const cSkill = { skill: "C", image: c };
    const pythonSkill = { skill: "Python", image: python };
    const rubySkill = { skill: "Ruby", image: ruby };
    const sqlSkill = { skill: "SQL", image: sql };
    const fastAPI = { skill: "FastAPI", image: FastAPI };
    const aws = { skill: "AWS", image: Aws };

    return (

        <section id="skills">
            <div className={styles.mainContainer}>
                <h1> My <span className={styles.highlight}> Skills </span></h1>
                <div className={styles.grid}>
                    <SkillContainer skill={pythonSkill} />
                    <SkillContainer skill={javaSkill} />
                    <SkillContainer skill={cSharpSkill} />
                    <SkillContainer skill={reactSkill} />
                    <SkillContainer skill={javaScriptSkill} />
                    <SkillContainer skill={typeScriptSkill} />
                    <SkillContainer skill={htmlSkill} />
                    <SkillContainer skill={cssSkill} />
                    <SkillContainer skill={sqlSkill} />
                    <SkillContainer skill={gitSkill} />
                    <SkillContainer skill={cSkill} />
                    <SkillContainer skill={rubySkill} />
                    <SkillContainer skill={fastAPI} />
                    <SkillContainer skill={aws} styles={{ width: "62px" }} />                </div>
            </div>
        </section>
    );
}