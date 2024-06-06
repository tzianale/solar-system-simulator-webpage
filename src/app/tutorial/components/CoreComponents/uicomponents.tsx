const CGUIComponents: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">UI Components </h2>

      <div className=" rounded-lg p-6  mb-6">
        <p className="mb-4">
          The following image depicts the starting state of the simulation. The program has four
          interactable elements:{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Speed Slider
          </span>{' '}
          ,{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Play/Pause button
          </span>{' '}
          ,{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Escape button
          </span>{' '}
          , as well as a third button on the lower part of the screen with an{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Arrow
          </span>{' '}
          pointing upwards.{' '}
        </p>
        <img src="/bild1.png" alt="Next.js Logo" className="mb-4" />
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Simulation speed slider: You can use the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Speed Slider
            </span>{' '}
            to increase the time steps, which allows you to see planetary movements that would
            normally take years in just seconds. – More details about the simulation speed will
            follow in the “Time Controls” chapter –
          </li>
          <li className="mb-2">
            Play / Pause button: Clicking the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Play/Pause button
            </span>{' '}
            allows you to pause or resume the simulation, useful for taking screenshots or examining
            planetary positions closely.
          </li>
          <li className="mb-2">
            Forward button: The celestial body will move normally, and you can explore the future.
          </li>
          <li className="mb-2">
            Backward button: The celestial body will move in reverse, and you can explore the past.
          </li>
          <li className="mb-2">
            Arrow button: Click the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Arrow button
            </span>{' '}
            to toggle a list of planets from the bottom of the screen. Click again to retract the
            list.
          </li>
          <li className="mb-2">
            Escape button: Clicking the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Escape button
            </span>{' '}
            stops the simulation and takes you back to the main menu, where you can quit the program
            or start a new simulation.
          </li>
        </ul>

        <img src="/gettingstarted2.png" alt="Next.js Logo" className="mb-4" />

        <p className="mb-4">
          The list is scrollable, either by moving the white bar on the bottom to the right,
          scrolling with the mouse wheel, or by dragging the planets to the left. Each element in
          the list is interactable:
        </p>
        <ol className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Single Left Click: will open an info tab with details about the specific planet (details
            about the Planet Info Tab will be explained in the following chapter)
          </li>
          <li className="mb-2">Two Clicks: will move the camera to focus on the planet.</li>
        </ol>
      </div>
    </div>
  );
};

export default CGUIComponents;
