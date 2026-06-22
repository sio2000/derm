'use client';

import { useCallback, useEffect, useState } from 'react';

// Global image lightbox with pagination. Any <img> on the page that is NOT
// inside a link (and not opted out with data-no-lightbox) becomes clickable
// and opens fullscreen. Prev/next cycle through all eligible images on the page.
function collectImages(): string[] {
  return Array.from(document.querySelectorAll('img'))
    .filter((img) => {
      if (img.closest('a')) return false;
      if (img.dataset.noLightbox !== undefined) return false;
      if (img.closest('[data-no-lightbox]')) return false;
      if (img.naturalWidth && img.naturalWidth < 80) return false;
      return true;
    })
    .map((img) => (img as HTMLImageElement).currentSrc || (img as HTMLImageElement).src);
}

export default function LightboxProvider() {
  const [gallery, setGallery] = useState<string[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const go = useCallback(
    (dir: number) => {
      setIndex((cur) => {
        if (cur === null || gallery.length === 0) return cur;
        return (cur + dir + gallery.length) % gallery.length;
      });
    },
    [gallery.length]
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const img = target?.closest('img') as HTMLImageElement | null;
      if (!img) return;
      if (img.closest('a')) return;
      if (img.dataset.noLightbox !== undefined || img.closest('[data-no-lightbox]')) return;
      if (img.naturalWidth && img.naturalWidth < 80) return;
      e.preventDefault();
      const list = collectImages();
      const clicked = img.currentSrc || img.src;
      const idx = Math.max(0, list.indexOf(clicked));
      setGallery(list);
      setIndex(idx);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, go]);

  if (index === null || !gallery[index]) return null;
  const hasMany = gallery.length > 1;

  const navBtn = (side: 'left' | 'right') => ({
    position: 'absolute' as const,
    [side]: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    border: '1px solid rgba(232, 213, 154, 0.6)',
    background: 'rgba(0,0,0,0.35)',
    color: 'rgb(232, 213, 154)',
    fontSize: '26px',
    cursor: 'pointer',
    lineHeight: 1,
    zIndex: 2,
  });

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 4000,
        background: 'rgba(20, 14, 8, 0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        cursor: 'zoom-out',
      }}
      role="dialog"
      aria-modal="true"
    >
      <button onClick={close} aria-label="Κλείσιμο" style={{ position: 'absolute', top: '20px', right: '24px', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(232, 213, 154, 0.6)', background: 'rgba(0,0,0,0.3)', color: 'rgb(232, 213, 154)', fontSize: '28px', cursor: 'pointer', lineHeight: 1, zIndex: 2 }}>
        ×
      </button>

      {hasMany && (
        <>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Προηγούμενη" style={navBtn('left')}>‹</button>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Επόμενη" style={navBtn('right')}>›</button>
          <span
            style={{
              position: 'absolute',
              bottom: '22px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.85)',
              background: 'rgba(0,0,0,0.4)',
              padding: '4px 14px',
              borderRadius: '999px',
            }}
          >
            {index + 1} / {gallery.length}
          </span>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={gallery[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '92%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 12px 48px rgba(0,0,0,0.6)', cursor: 'default' }}
      />
    </div>
  );
}
