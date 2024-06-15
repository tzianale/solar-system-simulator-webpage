const CGCameraPresets: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-xl font-semibold mb-2">Camera Presets</h2>

      <p className="mb-4">
        To enhance the user experience, we have included two camera presets that allow you to
        quickly switch between different perspectives:
      </p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Bird's Eye View </h3>
        <p className="mb-2">
          Press the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            1 key
          </span>{' '}
          to switch to a bird's eye view. This perspective provides a top-down view
          centered around the current pivot point, ideal for getting a comprehensive overview of the
          solar system.{' '}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Side View </h3>
        <p className="mb-2">
          {' '}
          Press the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            3 key
          </span>{' '}
          to switch to a side view. This perspective offers a lateral view of the
          current pivot point, useful for examining the spatial relationships between planets.{' '}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Diagonal View</h3>
        <p className="mb-2">
          {' '}
          Press the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            7 key
          </span>{' '}
          to switch to a diagonal view. This perspective provides a mix of a side view, looking slightly down at the sun.
        </p>
      </div>
    </div>
  );
};

export default CGCameraPresets;
