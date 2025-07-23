import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

export const TypedText = ({ 
  strings, 
  className = '', 
  typeSpeed = 50, 
  backSpeed = 30, 
  loop = true 
}: TypedTextProps) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        backDelay: 2000,
        startDelay: 500,
        cursorChar: '|',
        showCursor: true,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className} />;
};