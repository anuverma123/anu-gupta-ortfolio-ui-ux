import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Reveal — word-by-word mask reveal animation.
 * Uses useInView with `amount: "some"` and once:true to reliably trigger
 * even when the element is fully in view on mount.
 */
export function Reveal({ text, className = "", delay = 0, as: Tag = "span", stagger = 0.04 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const words = String(text).split(" ");

  return (
    <Tag ref={ref} className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
          }}
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{ display: "inline-block", paddingRight: "0.25em" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeUp({ children, delay = 0, className = "", y = 24, ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
