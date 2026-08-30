import { useState } from "react";
import BeyondCodeCard from "./HobbyContainer";
import styles from "./Caraoul.module.css";

const hobbies = [
  {
    title: "Being active",
    description:
      "I enjoy staying active, getting outside, and finding new ways to keep moving.",
    image: null,
  },
  {
    title: "Watching movies",
    description:
      "A good story, memorable characters, and a relaxed movie night are hard to beat.",
    image: null,
  },
  {
    title: "Travelling",
    description:
      "Exploring new places, discovering different cultures, and collecting new experiences.",
    image: null,
  },
];


export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % hobbies.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? hobbies.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.carousel}>

      <button onClick={previous} className={styles.arrow} aria-label="Previous hobby">
        <span aria-hidden="true">←</span>
      </button>

      <BeyondCodeCard {...hobbies[current]} />

      <button onClick={next} className={styles.arrow} aria-label="Next hobby">
        <span aria-hidden="true">→</span>
      </button>

      <div className={styles.dots} aria-label="Choose a hobby">
        {hobbies.map((hobby, index) => (
          <button
            key={hobby.title}
            onClick={() => setCurrent(index)}
            className={`${styles.dot} ${index === current ? styles.activeDot : ""}`}
            aria-label={`Show ${hobby.title}`}
            aria-current={index === current ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}