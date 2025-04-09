import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const SplitText = ({
  text = '',
  className = '',
  delay = 0.05,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  easing = [0.22, 1, 0.36, 1], // easeOutCubic
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ').map((word) => word.split(''));
  const letters = words.flat();
  const controls = useAnimation();
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        ...animationTo,
        transition: {
          delay: i * delay,
          ease: easing,
          duration: 0.5,
        },
      }));
    }
  }, [inView, controls, delay, animationTo, easing]);

  useEffect(() => {
    if (!inView || !onLetterAnimationComplete) return;

    const timeout = setTimeout(() => {
      onLetterAnimationComplete();
    }, (letters.length - 1) * delay * 1000 + 500); // total duration

    return () => clearTimeout(timeout);
  }, [inView, letters.length, delay, onLetterAnimationComplete]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <motion.span
                custom={index}
                key={index}
                initial={animationFrom}
                animate={controls}
                style={{
                  display: 'inline-block',
                  willChange: 'transform, opacity',
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
