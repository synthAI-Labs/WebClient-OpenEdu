import React from 'react';

type LockedBlockProps = {
  children: React.ReactNode;
};

const LockedBlock: React.FC<LockedBlockProps> = ({ children }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div>
          <div>🔒</div>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};

export default LockedBlock;
