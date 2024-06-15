const CGTimeControl: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-xl font-semibold mb-2">Time Controls</h2>

      <p className="mb-4">
        The following image depicts the time control elements of the simulation. The UI has five
        interactable elements:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Clicking the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Play/Pause button
          </span>{' '}
          allows you to pause or resume the simulation, useful for taking screenshots or examining
          planetary positions closely.
        </li>
        <li className="mb-2">
          Clicking the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            &gt;&gt; button
          </span>{' '}
          will move the simulation normally, allowing you to explore the future.
        </li>
        <li className="mb-2">
          Clicking the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            &lt;&lt; button
          </span>{' '}
          will move the simulation back in time, essentially letting you rewind the solar system.
        </li>
        <li className="mb-2">
          Move the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Simulationspeed Slider
          </span>{' '}
          to control the speed of the simulation.
        </li>
      </ul>

      <p className="mb-4">
        There are more Controls available depending on the mode you are in ....
      </p>

      <div className=" flex justify-center ">
        <img src="/timecontrol1.png" width={900} alt="Next.js Logo" className="mb-4 " />
      </div>
      <div className=" flex justify-center ">
        <img src="/timecontrol2.png" width={400} alt="Next.js Logo" className="mb-4" />
      </div>
    </div>
  );
};

export default CGTimeControl;
