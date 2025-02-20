import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Assuming react-globe.gl and three are installed via npm and imported correctly
import Globe from 'react-globe.gl';

const Globes: React.FC = () => {
  useEffect(() => {
    const globeElement = document.getElementById('globeViz');
    if (globeElement) {
      const root = createRoot(globeElement);
      const shieldRing = { lat: 90, lng: 0 };

      root.render(
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          ringsData={[shieldRing]}
          ringAltitude={0.25}
          ringColor={() => 'lightblue'}
          ringMaxRadius={180}
          ringPropagationSpeed={20}
          ringRepeatPeriod={200}
        />
      );
    }
  }, []);

  return <div id="globeViz" style={{ width: '100%', height: '100vh' }} />;
};

export default Globes;
