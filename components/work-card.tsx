import Link from "next/link";

import { WorkProps } from "../types";
import styles from "./work-card.module.css";

export default function WorkCard({
  imageUrl,
  title,
  id,
  tags,
  summary,
}: WorkProps) {
  return (
    <div className={styles.card}>
      {imageUrl && <img className={styles.image} src={imageUrl} />}
      <Link href={`/works/${id}`}>
        <a>{title}</a>
      </Link>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span className={styles.tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
