const CGTimeControl: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto my-8 p-4">
      <h2 className="text-xl font-semibold mb-2">Time Controls</h2>

      <p className="mb-4">
        You have a{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          Play/Pause button
        </span>{' '}
        that allows you to stop or start the simulation. Positioned at the top left, there is a
        slider that enables you to control the speed of the simulation. The slider scale ranges from
        1 to 20, with the selected number displayed above it. In Explorer Mode, below the slider,
        you can also see the current date of the simulation. Each increment on the{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          Slider
        </span>{' '}
        corresponds to one day per second in terms of planet movement speed.
      </p>
      <img src="/timecontrol1.png" alt="Next.js Logo" className="mb-4" />
    </div>
  );
};

export default CGTimeControl;
