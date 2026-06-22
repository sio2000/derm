import Image from 'next/image';
import Link from 'next/link';
import type { Treatment } from '@/data/treatments';

// Vertical list of treatments in the reference style: rounded card with a
// thumbnail on the left, the treatment name on the right, gold border and a
// bronze highlight on hover.
export default function TreatmentList({
  treatments,
  basePath,
}: {
  treatments: Treatment[];
  basePath: string;
}) {
  return (
    <div className="tl-list">
      {treatments.map((t) => (
        <Link key={t.slug} href={`${basePath}/${t.slug}/`} className="tl-card">
          <span className="tl-thumb">
            <Image src={t.thumb || t.heroImage} alt={t.name} fill sizes="76px" style={{ objectFit: 'cover' }} />
          </span>
          <span className="tl-name">{t.name}</span>
          <svg className="tl-arrow" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
