'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Πρόσωπο', href: '/el/ypiresies/prosopo/' },
  { label: 'Σώμα', href: '/el/ypiresies/soma/' },
  { label: 'Κλινική Δερματολογία', href: '/el/ypiresies/kliniki-dermatologia/' },
  { label: 'Η Ιατρός μας', href: '/el/about-us/' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="ad-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        backgroundColor: '#fff',
        color: 'rgb(110, 90, 51)',
        display: 'flex',
        alignItems: 'center',
        padding: '16px 24px',
        height: '135px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      }}
    >
      {/* Logo */}
      <div style={{ marginRight: '28px', flexShrink: 0, marginBottom: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Link href="/">
          <Image
            src="/images/newlogo.png"
            alt="Advanced Derma"
            width={72}
            height={72}
            priority
            style={{ height: '72px', width: 'auto', display: 'block', paddingTop: '4px', paddingBottom: '4px', paddingLeft: '8px' }}
          />
        </Link>
      </div>

      {/* Nav links — desktop */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          flex: 1,
          flexWrap: 'wrap',
        }}
        className="hidden md:flex ad-nav"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgb(110, 90, 51)',
              padding: '6px 10px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(110, 90, 51,0.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right CTA buttons */}
      <div className="ad-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', flexShrink: 0 }}>
        <Link
          href="/el/booking-request/"
          style={{
            backgroundColor: 'rgb(203, 179, 121)',
            color: '#000',
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(147, 123, 76)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(203, 179, 121)')}
        >
          Κλείστε το ραντεβού σας
        </Link>
        <Link
          href="/el/dermatologika-iatreia/"
          style={{
            backgroundColor: 'transparent',
            color: 'rgb(110, 90, 51)',
            fontFamily: 'HarmoniaSans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid rgb(110, 90, 51)',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgb(110, 90, 51)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgb(110, 90, 51)'; }}
        >
          Ιατρεία
        </Link>
      </div>

      {/* ── Mobile hamburger toggle (mobile/tablet only, hidden on desktop) ── */}
      <button
        type="button"
        className="ad-burger"
        aria-label={menuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
        aria-expanded={menuOpen}
        aria-controls="ad-mobile-panel"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="ad-burger-box" data-open={menuOpen}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* ── Mobile dropdown panel (mobile/tablet only) ── */}
      <nav
        id="ad-mobile-panel"
        className={`ad-mobile-panel${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="ad-mobile-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link
          href="/el/booking-request/"
          className="ad-mobile-cta ad-mobile-cta--solid"
          onClick={() => setMenuOpen(false)}
        >
          Κλείστε το ραντεβού σας
        </Link>
        <Link
          href="/el/dermatologika-iatreia/"
          className="ad-mobile-cta ad-mobile-cta--outline"
          onClick={() => setMenuOpen(false)}
        >
          Ιατρεία
        </Link>
      </nav>
    </header>
  );
}
