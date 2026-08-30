import styles from "./HobbyContainer.module.css"
export default function BeyondCodeCard({
    title,
    description,
    image,
  }) {
    return (
      <div className={styles.beyondCodeCard}>
        <div className={styles.imageSlot} role="img" aria-label={`${title} photo`}>
          {image && <img className={styles.image} src={image} alt={`${title}`} />}
        </div>
  
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }