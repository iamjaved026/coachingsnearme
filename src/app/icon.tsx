import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/svg+xml'; // or image/png, but we'll return a png via ImageResponse

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          borderRadius: '8px',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.9" />
          <circle cx="12" cy="9" r="3" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
