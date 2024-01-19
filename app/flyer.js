"use client";

import styles from "./page.module.css";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const Flyer = ({ id, duration, onComplete, xoff, delay, height }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      top: -500,
      transition: { duration: duration, delay: delay },
    });
  }, []);

  return (
    <motion.img
      className={styles.flying_image}
      src="/portfolio/050124-NETD-SPECIALS-0.jpg"
      alt="Moving Photograpy Logo"
      style={{
        top: `calc(100vh + 0px)`,
        right: `calc(${xoff}vw - ${height / 0.66 / 2}px)`,
        width: height / 0.66,
        height: height,
      }}
      onMouseEnter={() => {
        controls.stop();
      }}
      onMouseLeave={() => {
        controls.start({
          top: -500,
          transition: { duration: duration },
        });
      }}
      animate={controls}
    />
  );
};

export default Flyer;
