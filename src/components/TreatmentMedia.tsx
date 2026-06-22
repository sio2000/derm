import type { MediaItem } from '@/data/treatments';

// Accompanying photos/videos for a treatment, shown inline among the info.
// No heading — each item is displayed whole (not cropped). Images open
// fullscreen via the global LightboxProvider; videos play with native controls.
export default function TreatmentMedia({ media }: { media: MediaItem[] }) {
  if (!media || media.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '620px',
        margin: '8px auto 32px',
      }}
    >
      {media.map((m, i) =>
        m.type === 'video' ? (
          <video
            key={i}
            controls
            playsInline
            preload="metadata"
            poster={m.poster}
            data-no-lightbox
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '12px',
              backgroundColor: '#000',
              boxShadow: '0 2px 14px rgba(110, 90, 51, 0.15)',
            }}
          >
            <source src={m.src} type="video/mp4" />
          </video>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={i}
            src={m.src}
            alt={m.alt || 'Advanced Derma'}
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '12px',
              cursor: 'zoom-in',
              boxShadow: '0 2px 14px rgba(110, 90, 51, 0.15)',
            }}
          />
        )
      )}
    </div>
  );
}
