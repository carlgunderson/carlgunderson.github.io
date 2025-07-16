import type { FC } from 'react';

import { useTheme } from '~/contexts/ThemeContext';

const BlurryBg: FC = () => {
  const { theme } = useTheme();

  const blobs = [
    {
      style: {
        position: 'absolute',
        top: '-10%',
        left: '-20%',
        width: 600,
        height: 600,
        background:
          theme === 'dark'
            ? 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1e293b 100%)'
            : 'radial-gradient(circle at 30% 30%, #a5b4fc 0%, #f0f4ff 100%)',
        opacity: theme === 'dark' ? 0.25 : 0.55,
        filter: 'blur(120px)',
        borderRadius: '50%',
        zIndex: 0,
      },
    },
    {
      style: {
        position: 'absolute',
        bottom: '-15%',
        right: '-10%',
        width: 700,
        height: 700,
        background:
          theme === 'dark'
            ? 'radial-gradient(circle at 70% 70%, #a21caf 0%, #0f172a 100%)'
            : 'radial-gradient(circle at 70% 70%, #fbc2eb 0%, #f7d9e3 100%)',
        opacity: theme === 'dark' ? 0.18 : 0.45,
        filter: 'blur(140px)',
        borderRadius: '50%',
        zIndex: 0,
      },
    },
    {
      style: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: 500,
        height: 500,
        background:
          theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, #fef08a 0%, #334155 100%)'
            : 'radial-gradient(circle at 50% 50%, #fef9c3 0%, #f0f4ff 100%)',
        opacity: theme === 'dark' ? 0.12 : 0.35,
        filter: 'blur(100px)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      },
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <div key={i} style={blob.style as React.CSSProperties} />
      ))}
    </div>
  );
};

export default BlurryBg;
