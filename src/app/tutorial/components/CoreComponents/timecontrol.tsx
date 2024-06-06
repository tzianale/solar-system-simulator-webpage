const CGTimeControl: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-xl font-semibold mb-2">Time Controls</h2>

      <p className="mb-4">
        You have a{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          Play/Pause button
        </span>{' '}
        that allows you to stop or start the simulation. Positioned at the top left, there is a{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          Simulationspeed Slider
        </span>{' '}
        that enables you to control the speed of the simulation.
      </p>
      <p className="mb-4">
        The selected speed will be displayed next to it. In Explorer Mode, top left, you can also
        see the current date of the simulation. You can click on the date and a window will pop up.
        There you can choose a date and time. You can click on {' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          Submit
        </span>{' '}
        and the simulation will move to this time. Additionally, you have two buttons {' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          {'<<'}
        </span>{' '}
        and{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          {'>>'}
        </span>{' '}
      </p>
      <p className="mb-4">
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          {'<<'}
        </span>{' '}
        will go back to the time and you will take a journey to the past while{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          {'>>'}
        </span>{' '}
        will show you the future! Finally, you have a {' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
           Real Time Checkmark
        </span>{' '}
        Here the simulation will ignore the simulation slider and the speed will be adjusted to the
        real lifetime.
      </p>

      <img src="/timecontrol1.png" alt="Next.js Logo" className="mb-4" />
      <img src="/timecontrol2.png" alt="Next.js Logo" className="mb-4" />
    </div>
  );
};

export default CGTimeControl;
