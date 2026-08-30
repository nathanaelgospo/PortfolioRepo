
import Carasoul from "../components/Carasoul"
import styles from "./BeyondCode.module.css"

export default function BeyondCode(){
    return (
        <section id="beyond-code">
            <div className={styles.mainContainer}>
                <h1> Beyond <span className={styles.highlight}> Code </span></h1>
                    <Carasoul/>
                </div>
        </section>
    )
}