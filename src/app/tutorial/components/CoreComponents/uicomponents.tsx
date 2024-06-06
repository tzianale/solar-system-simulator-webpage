const CGUIComponents: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-2xl font-semibold mb-4">UI Components </h2>

      <div className=" rounded-lg p-6  mb-6">
        <p className="mb-4">
          The following image depicts the starting state of the explorer mode. The UI has seven
          interactable elements:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Real time toggle</li>
          <li className="mb-2">Sumulation speed slider</li>
          <li className="mb-2">Play / Pause button</li>
          <li className="mb-2">Backwards button ( {"<<"} )</li>
          <li className="mb-2">Forward button ( {">>"} )</li>
          <li className="mb-2">Escape button</li>
          <li className="mb-2">Planet list button, as an up-pointing arrow</li>
        </ul>

        <img src="/bild1.png" alt="Next.js Logo" className="mb-4" />
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Real time toggle: Activate the real time mode by pressing this <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Checkmark
            </span>{' '}. This will run
            the simulation in real time, which means, it will take earth 24 hours of running your
            computer with the application opened to do one full rotation around itself
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
            Forward button: Clicking the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Forward button
            </span>{' '}  will move the simulation normally, allowing you to explore the future.
          </li>
          <li className="mb-2">
            Backward button: Clicking the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Backward button
            </span>{' '} will move the simulation back in time, essentially letting you rewind the solar system.
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
            stops the simulation and takes you back to the main menu, where you can quit the program or start a new simulation mode
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
