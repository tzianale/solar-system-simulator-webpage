const CGCameraMovement: React.FC = () => {

    return (
<div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Camera Movement</h2>

            <p className="mb-4">
              Navigating the solar system simulator is intuitive and allows for a smooth exploration
              experience. The controls are the following:
            </p>

            <div className="mb-4">
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">
                  Pan: Hold the left mouse button and drag to pan the camera across the scene.{' '}
                </li>
                <li className="mb-2">
                  Zoom In/Out: Use the scroll wheel to zoom in and out, bringing objects closer or
                  pushing them further away.{' '}
                </li>
                <li className="mb-2">
                  Rotate: Hold the right mouse button and move the mouse to rotate the camera around
                  the current pivot point.{' '}
                </li>
                <li className="mb-2">
                  Increase Sensitivity: Hold the Shift key while performing any of the above actions
                  to increase the sensitivity, allowing for faster movements.{' '}
                </li>
                <li className="mb-2">
                  Reset View: Press R on the keyboard to reset the camera back to the sun, in case
                  you get lost in the solar system.{' '}
                </li>
              </ol>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Zooming</h3>
              <p className="mb-2">To zoom in and out:</p>
              <ul className="list-disc pl-6">
                <li>Use the scroll wheel on your mouse.</li>
                <li>Scroll forward to zoom in and backward to zoom out.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Panning</h3>
              <p className="mb-2">To move the camera horizontally and vertically:</p>
              <ul className="list-disc pl-6">
                <li>Click and hold the right mouse button.</li>
                <li>Move the mouse in any direction to pan the camera.</li>
              </ul>
            </div>

            <p>
              With these controls, you can freely explore the solar system from different
              perspectives and angles. Experiment with camera movement to get the best view of
              planets, moons, and other celestial objects!
            </p>
          </div>
    );
  };
  
  export default CGCameraMovement;
  