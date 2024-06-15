const CGUIComponents: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-2xl font-semibold mb-4">UI Components </h2>

      <div className=" rounded-lg p-6  mb-6">
        <p className="mb-4">
          The following image depicts the starting state of the explorer mode. 
        </p>
        <img src="/bild1.png" alt="Next.js Logo" className="mb-4" />
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            Clicking the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              Escape button
            </span>{' '}
            stops the simulation and takes you back to the main menu, where you can quit the program
            or start a new simulation mode
          </li>
          <li className="mb-2">
            Clicking on the{' '}
            <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
              &uarr; button
            </span>{' '}
            to toggle a list of planets from the bottom of the screen. Click again to retract the
            list.
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
            <span className=" font-bold ">Single Click:</span> will open an info tab with details
            about the specific planet (details about the Planet Info Tab will be explained in the {''}
              <span className=" font-bold ">
            Planet Information
            </span>{' '} chapter)
          </li>
          <li className="mb-2">
            {' '}
            <span className=" font-bold ">Double Click:</span> will move the camera to focus on the
            planet.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CGUIComponents;
