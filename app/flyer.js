"use client";

import styles from "./page.module.css";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Flyer = ({ id, duration, onComplete, xoff, delay, height }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    margin: `${height - 1}px 0px 0px 0px`,
  });
  const animation = useRef(null);
  const renderCounter = useRef(0);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { top: `calc(0vh - ${height * 2}px)` },
      { duration: duration, ease: "linear", delay: delay }
    );
  });

  useEffect(() => {
    renderCounter.current++;
    if (!isInView && renderCounter.current >= 4) onComplete(id);
  }, [isInView, onComplete, id]);

  return (
    <Image
      ref={scope}
      className={styles.flying_image}
      src="/portfolio/050124-NETD-SPECIALS-0.jpg"
      alt="Moving Photograpy Logo"
      width={height / 0.66}
      height={height}
      style={{
        top: `calc(100vh + 0px)`,
        right: `calc(${xoff}vw - ${height / 0.66 / 2}px)`,
      }}
    />
  );
};

export default Flyer;
