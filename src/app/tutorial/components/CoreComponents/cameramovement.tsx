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
            Pan: Hold the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              left mouse button
            </span>{' '}
            and drag to pan the camera across the scene.{' '}
          </li>
          <li className="mb-2">
            Zoom In/Out: Use the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              {' '}
              scroll wheel
            </span>{' '}
            to zoom in and out, bringing objects closer or pushing them further away.{' '}
          </li>
          <li className="mb-2">
            Rotate: Hold the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              right mouse button
            </span>{' '}
            and move the mouse to rotate the camera around the current pivot point.{' '}
          </li>
          <li className="mb-2">
            Increase Sensitivity: Hold the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Shift key
            </span>{' '}
            while performing any of the above actions to increase the sensitivity, allowing for
            faster movements.{' '}
          </li>
          <li className="mb-2">
            Reset View: Press the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              {' '}
              R key
            </span>{' '}
            to reset the camera back to the sun, in case you get lost in the solar system.{' '}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CGCameraMovement;
