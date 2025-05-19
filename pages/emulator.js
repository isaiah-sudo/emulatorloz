import React from 'react';

const EmulatorPage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/emulatorloz/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Emulator LOZ"
      ></iframe>
    </div>
  );
};

export default EmulatorPage;