'use client';
import { useState } from 'react';
import type { Review } from '@/lib/content/types';

const PER_PAGE = 6;

export default function TestimonialsSection({
  reviews,
  rating,
  count,
}: {
  reviews: Review[];
  rating: string;
  count: string;
}) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(reviews.length / PER_PAGE);
  const visibleReviews = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const go = (next: number) => {
    setPage(Math.max(0, Math.min(pageCount - 1, next)));
    if (typeof document !== 'undefined') {
      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id="testimonials"
      style={{
        width: '100%',
        minHeight: '630px',
        backgroundColor: '#fff',
        padding: '60px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <h2
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '40px',
            fontWeight: 700,
            color: 'rgb(110, 90, 51)',
            marginBottom: '12px',
            textAlign: 'center',
          }}
        >
          Είπαν για εμάς
        </h2>
        <p
          style={{
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            color: '#888',
            textAlign: 'center',
            marginBottom: '28px',
          }}
        >
          Λίγα λόγια από τους ασθενείς μας
        </p>

        {/* Google rating summary card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid rgb(244, 238, 224)',
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '340px',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#333',
              }}
            >
              κριτικές
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '30px',
                  fontWeight: 700,
                  color: '#333',
                  lineHeight: 1,
                }}
              >
                {rating}
              </span>
              <span style={{ display: 'flex', gap: '2px' }} aria-label={`${rating} στα 5 αστέρια`}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} style={{ color: '#FBBC04', fontSize: '22px', lineHeight: 1 }}>★</span>
                ))}
              </span>
              <span
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '15px',
                  color: '#888',
                }}
              >
                ({count})
              </span>
            </div>
            <a
              href="https://www.google.com/search?sca_esv=33ade75dbb948c2a&sxsrf=APpeQntgnruITvA8NMwbOY3bFOOaE1mBsg:1783217339469&q=Advanced+Derma+Athens+%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__aFEiHevihIMBM0SVGfaE9oO14XsvepXJ-TLSKN5TEiwpED3LqiZTEfdtGf9qfB7sLYWvg%3D&uds=AJ5uw18nNIe6iM3ZvBqn-kM2E7cZKCbDamlH4m9EBi4wY3S_DBrGSIQi9JfZLsNZNp94WekPRXQMVHLNCGO9AkHMqB83kYH0NVSW9vRynZZ0af5LtCt08lPBe5DOgp-3UF4MJXbYOGE8XhZi6h3lDJUnmIUUUNMUow&sa=X"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#1a73e8',
                color: '#fff',
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                padding: '10px 18px',
                borderRadius: '6px',
                textDecoration: 'none',
                marginTop: '4px',
              }}
            >
              Κριτική σε εμάς στο Google
            </a>
          </div>
        </div>

        <div
          className="derma-rgrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {visibleReviews.map((review, i) => (
            <div
              key={review.id}
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgb(244, 238, 224)',
                borderRadius: '8px',
                padding: '28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ marginBottom: '12px', display: 'flex', gap: '2px' }}>
                {Array.from({ length: review.stars }).map((_, si) => (
                  <span key={si} style={{ color: '#C9A227', fontSize: '16px' }}>★</span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'HarmoniaSansQuote, HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  color: '#333',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  whiteSpace: 'pre-line',
                  flex: 1,
                }}
              >
                {review.text}
              </p>
              <p
                style={{
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'rgb(110, 90, 51)',
                  marginTop: '18px',
                }}
              >
                {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination: Previous / page dots / Next */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => go(page - 1)}
            disabled={page === 0}
            aria-label="Προηγούμενες αξιολογήσεις"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              padding: '8px 18px',
              borderRadius: '6px',
              border: '1px solid rgb(203, 179, 121)',
              backgroundColor: page === 0 ? 'transparent' : 'rgb(203, 179, 121)',
              color: page === 0 ? 'rgba(110, 90, 51,0.45)' : '#000',
              cursor: page === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            ‹ Προηγούμενα
          </button>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Σελίδα ${i + 1}`}
                aria-current={i === page ? 'page' : undefined}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'HarmoniaSans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: i === page ? 'rgb(110, 90, 51)' : 'rgb(244, 238, 224)',
                  color: i === page ? '#fff' : 'rgb(110, 90, 51)',
                  transition: 'background-color 0.2s',
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => go(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Επόμενες αξιολογήσεις"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              padding: '8px 18px',
              borderRadius: '6px',
              border: '1px solid rgb(203, 179, 121)',
              backgroundColor: page === pageCount - 1 ? 'transparent' : 'rgb(203, 179, 121)',
              color: page === pageCount - 1 ? 'rgba(110, 90, 51,0.45)' : '#000',
              cursor: page === pageCount - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Επόμενα ›
          </button>
        </div>
      </div>
    </div>
  );
}
