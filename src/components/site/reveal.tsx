import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { useLang } from "@/lib/i18n";
import { isPrerenderDocument } from "@/lib/site";

const easing = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { lang } = useLang();
  const prerender = isPrerenderDocument();
  const motionProps = prerender
    ? { initial: false as const, animate: "show" as const }
    : { initial: "hidden" as const, whileInView: "show" as const };
  return (
    <motion.div
      key={lang}
      className={className}
      {...motionProps}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { lang } = useLang();
  const prerender = isPrerenderDocument();
  const motionProps = prerender
    ? { initial: false as const, animate: "show" as const }
    : { initial: "hidden" as const, whileInView: "show" as const };
  return (
    <motion.div
      key={lang}
      className={className}
      {...motionProps}
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: 0.65, ease: easing }}
    >
      {children}
    </motion.div>
  );
}
