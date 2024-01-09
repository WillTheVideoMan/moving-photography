"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Flyer from "./flyer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [flyers, updateFlyers] = useState([]);
  const flyerCompleteCount = useRef(0);

  const initFlyers = () => {
    const newFlyers = [];

    for (let i = 0; i < 5; i++) {
      newFlyers.push({
        id: Math.random(),
        duration: 10 * Math.random() + 20,
        xoff: 100 * Math.random(),
        delay: 20 * Math.random(),
        data: "123",
        height: 200 * Math.random() + 200,
      });
    }

    return newFlyers;
  };

  const handleComplete = (id) => {
    console.log("animation complete: " + id);

    flyerCompleteCount.current++;

    if (flyerCompleteCount.current === 5) {
      console.log("all completed");
      flyerCompleteCount.current = 0;
      updateFlyers(initFlyers());
    }
  };

  useEffect(() => {
    updateFlyers(initFlyers());
  }, []);

  return (
    <main className={styles.main}>
      {flyers.map((flyer) => (
        <Flyer
          key={flyer.id}
          id={flyer.id}
          duration={flyer.duration}
          data={flyer.data}
          xoff={flyer.xoff}
          delay={flyer.delay}
          height={flyer.height}
          onComplete={handleComplete}
        />
      ))}
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
