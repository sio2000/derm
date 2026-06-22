'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
  imageOnLeft?: boolean;
  height?: number;
}

export default function ServiceSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
  imageOnLeft = false,
  height = 529,
}: ServiceSectionProps) {
  return (
    <div
      className="ad-svc"
      style={{
        width: '100%',
        backgroundColor: '#fff',
        minHeight: `${height}px`,
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <div
        className="ad-svc-inner"
        style={{
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: imageOnLeft ? 'row' : 'row-reverse',
          alignItems: 'stretch',
          minHeight: `${height}px`,
        }}
      >
        {/* Image column */}
        <div
          className="ad-svc-imgcol"
          style={{
            flex: '0 0 45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px',
            paddingRight: imageOnLeft ? '0' : '32px',
            paddingLeft: imageOnLeft ? '32px' : '0',
          }}
        >
          <Image
            className="ad-svc-img"
            src={imageSrc}
            alt={imageAlt}
            width={479}
            height={360}
            style={{
              width: '479px',
              height: '360px',
              objectFit: 'cover',
              borderRadius: '4px',
              maxWidth: '100%',
            }}
          />
        </div>

        {/* Text column */}
        <div
          className="ad-svc-textcol"
          style={{
            flex: '0 0 55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '48px 64px',
            paddingLeft: imageOnLeft ? '48px' : '80px',
            paddingRight: imageOnLeft ? '80px' : '48px',
          }}
        >
          <h2
            className="ad-svc-title"
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '40px',
              fontWeight: 700,
              color: 'rgb(110, 90, 51)',
              marginBottom: '24px',
              lineHeight: 1.15,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              style={{
                fontFamily: 'HarmoniaSans, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                color: 'rgb(147, 123, 76)',
                marginTop: '-12px',
                marginBottom: '20px',
              }}
            >
              {subtitle}
            </p>
          )}
          <p
            style={{
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#333',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '540px',
            }}
          >
            {description}
          </p>
          <Link
            href={buttonHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgb(203, 179, 121)',
              color: '#000',
              fontFamily: 'HarmoniaSans, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              padding: '10px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              alignSelf: 'flex-start',
              transition: 'background-color 0.2s',
            }}
          >
            {buttonText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
