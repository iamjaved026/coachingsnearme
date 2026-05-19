import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

// Image metadata
export const alt = `${siteConfig.name} - Platform Preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #0f172a, #020617)',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo and Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
              boxShadow: '0 20px 40px rgba(59,130,246,0.3)',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.9" />
              <circle cx="12" cy="9" r="3" fill="white" />
            </svg>
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            Coachings<span style={{ color: '#60a5fa' }}>NearMe</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 700,
            color: 'transparent',
            backgroundImage: 'linear-gradient(to right, #93c5fd, #22d3ee)',
            backgroundClip: 'text',
            marginBottom: '24px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.tagline}
        </div>
        
        {/* Description */}
        <div
          style={{
            fontSize: '32px',
            color: '#94a3b8', // slate-400
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.5,
            marginBottom: '60px',
          }}
        >
          Discover nearby coachings, compare institutes, and organize your educational life in one premium ecosystem.
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '16px 32px',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ fontSize: '24px', color: '#60a5fa', marginRight: '12px' }}>📍</div>
          <div style={{ fontSize: '24px', color: 'white', fontWeight: 600 }}>
            Launching locally in {siteConfig.launchCity}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
