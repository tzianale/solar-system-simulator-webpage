const CGUIComponents: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Solar System Simulator UI Components </h2>

      <div className=" rounded-lg p-6  mb-6">
        <h3 className="text-lg font-semibold mb-2">Planet Selection</h3>
        <p className="mb-4">
          The User Interface (UI) is one the most important things to understand if you want to use
          a program correctly. Although most UI elements are intuitive, this short tutorial will
          help the user to completely understand each element of the UI.
        </p>
        <p className="mb-4">
          The following image depicts the starting state of the simulation. The program has four
          interactable elements: the speed slider, the Play / Pause button, the Escape button, as
          well as a third button on the lower part of the screen with an arrow pointing upwards.{' '}
        </p>
        <img src="/sun.png" alt="Next.js Logo" className="mb-4" />
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">
            Simulation speed slider: You can use the Simulation Speed Slider to increase the time
            steps, which allows you to see planetary movements that would normally take years in
            just seconds. – More details about the simulation speed will follow in the “Time
            Controls” chapter –
          </li>
          <li className="mb-2">
            Play / Pause button: The Play/ Pause button allows you to pause or resume the
            simulation, useful for taking screenshots or examining planetary positions closely.
          </li>
          <li className="mb-2">
            Escape button: Clicking the Escape button stops the simulation and takes you back to the
            main menu, where you can quit the program or start a new simulation.
          </li>
          <li className="mb-2">
            The arrow button: if this button is pressed, a list of planets will raise from the lower
            part of the screen, as depicted in the following screenshot. One more click, and the
            list will lower itself to the original position.{' '}
          </li>
          <li className="mb-2">
            Forward button: The celestial body will move normally, and you can explore the future.
          </li>
          <li className="mb-2">
            Backward button: The celestial body will move in reverse, and you can explore the past.
          </li>
          <li className="mb-2">
            Arrow button: Click the arrow button to toggle a list of planets from the bottom of the
            screen. Click again to retract the list.
          </li>
        </ol>

        <img src="/sun.png" alt="Next.js Logo" className="mb-4" />

        <p className="mb-4">
          The list is scrollable, either by moving the white bar on the bottom to the right,
          scrolling with the mouse wheel, or by dragging the planets to the left. Each element in
          the list is interactable:
        </p>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">
            • Single Left Click: will open an info tab with details about the specific planet
            (details about the Planet Info Tab will be explained in the following chapter)
          </li>
          <li className="mb-2">• Two Clicks: will move the camera to focus on the planet.</li>
        </ol>
      </div>
    </div>
  );
};

export default CGUIComponents;
