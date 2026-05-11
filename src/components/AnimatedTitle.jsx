import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 30, rotateX: -45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Animated title that splits HTML into words and animates each one.
 * Preserves <em> wrapping by walking children rather than re-parsing.
 */
export default function AnimatedTitle({ html, className, as: Tag = 'h2' }) {
  // Split into words but keep <em>…</em> as a single styled unit.
  // We parse the html string into segments: { text, em }
  const segments = parseHtmlSegments(html);

  return (
    <Tag className={className} style={{ perspective: '1000px' }}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
        style={{ display: 'inline-block' }}
      >
        {segments.map((seg, i) => {
          const words = seg.text.split(/(\s+)/);
          return words.map((w, j) => {
            if (/^\s+$/.test(w)) return <span key={`${i}-${j}`}>{w}</span>;
            const inner = (
              <motion.span
                key={`${i}-${j}`}
                variants={word}
                style={{ display: 'inline-block', willChange: 'transform, opacity' }}
              >
                {w}
              </motion.span>
            );
            return seg.em ? <em key={`${i}-${j}`} style={{ fontStyle: 'normal' }}>{inner}</em> : inner;
          });
        })}
      </motion.span>
    </Tag>
  );
}

function parseHtmlSegments(html) {
  const out = [];
  const re = /<em>(.*?)<\/em>/g;
  let lastIndex = 0;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m.index > lastIndex) out.push({ text: html.slice(lastIndex, m.index), em: false });
    out.push({ text: m[1], em: true });
    lastIndex = re.lastIndex;
  }
  if (lastIndex < html.length) out.push({ text: html.slice(lastIndex), em: false });
  if (out.length === 0) out.push({ text: html, em: false });
  return out;
}
