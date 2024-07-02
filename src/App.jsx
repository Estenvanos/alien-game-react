import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

const App = ({ angle, moveObjects, gameState, startGame }) => {
  const canvasMousePositionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const position = getCanvasPosition(event);
      console.log('Mouse Position:', position);
      canvasMousePositionRef.current = position;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      if (canvasMousePositionRef.current) {
        moveObjects(canvasMousePositionRef.current);
      }
    }, 10);

    const handleResize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      if (cnv) {
        console.log('Resizing canvas to:', window.innerWidth, window.innerHeight);
        cnv.style.width = `${window.innerWidth}px`;
        cnv.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize to set the canvas size

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [moveObjects]);

  console.log('App props:', { angle, gameState, startGame });

  return (
    <Canvas
      angle={angle}
      gameState={gameState}
      startGame={startGame}
      trackMouse={() => {}}
    />
  );
};

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;
