import {
  FRAME_METADATA,
  SITE_URL,
} from '@/config';
import { Metadata } from 'next';
import './style/style.css';

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: 'Join to Degen Duels',
  other: FRAME_METADATA,
};

export default function Home() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex' }}>
      <h1
        style={{
          margin: 'auto',
          fontFamily: 'Orbitron, Arial, sans',
        }}
      >
        <a
          href={`https://warpcast.com/~/channel/degenduels`}
          style={{ color: 'inherit' }}
        >
          ⚔️Degen Duels⚔️
        </a>
      </h1>
    </div>
  );
}
