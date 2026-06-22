'use client';

import { useEffect, useState } from 'react';

// Intro loader. Uses INLINE styles only, so it renders correctly even before
// the global stylesheet has loaded (no flash of a giant unstyled logo).
// Shows on first paint, holds ~1.6s, then fades out and reveals the site.
const HOLD_MS = 1600;
const FADE_MS = 500;

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'show' | 'fading' | 'done'>('show');
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const start = Date.now();
    let raf = 0;
    const tick = () => {
      const pct = Math.min(100, 8 + Math.round(((Date.now() - start) / HOLD_MS) * 92));
      setProgress(pct);
      if (Date.now() - start < HOLD_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => setPhase('fading'), HOLD_MS);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = prevOverflow;
    }, HOLD_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === 'done') return null;

  const fading = phase === 'fading';

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '26px',
        background: 'linear-gradient(180deg, #ffffff 0%, rgb(244, 238, 224) 100%)',
        opacity: fading ? 0 : 1,
        visibility: fading ? 'hidden' : 'visible',
        transition: `opacity ${FADE_MS}ms ease, visibility ${FADE_MS}ms ease`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/newlogo.png"
        alt="Advanced Derma"
        style={{ width: '150px', height: 'auto', display: 'block' }}
      />
      <p
        style={{
          maxWidth: 'min(840px, 86vw)',
          fontFamily: 'HarmoniaSans, sans-serif',
          fontSize: 'clamp(11px, 1.3vw, 15px)',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          textAlign: 'center',
          lineHeight: 2.1,
          color: 'rgb(110, 90, 51)',
          margin: 0,
        }}
      >
        <strong style={{ display: 'block', fontWeight: 700, letterSpacing: '0.44em', color: 'rgb(147, 123, 76)' }}>
          Κέντρα Δερματολογίας και Laser
        </strong>
        Επιστημονική Εξειδίκευση
        <br />
        Ιατρική Αξιοπιστία
      </p>
      <div
        style={{
          width: 'min(360px, 70vw)',
          height: '2px',
          background: 'rgba(147, 123, 76, 0.2)',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <span
          style={{
            display: 'block',
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, rgb(147, 123, 76), rgb(232, 213, 154))',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
