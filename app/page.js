import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/moving-photography.png"
          alt="Moving Photograpy Logo"
          fill
          priority
        />
      </div>
    </main>
  );
}
