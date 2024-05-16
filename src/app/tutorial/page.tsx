// @client
'use client';
import { useState } from 'react';

export default function Home() {
  const [selecedTopic, setSelectedTopic] = useState('');

  const renderContent = () => {
    switch (selecedTopic) {
      case 'GSinstallation':
        return (
          <div className="max-w-xl mx-auto my-8">
            <h2 className="text-xl font-semibold mb-2">Installation Instructions</h2>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Download the Simulator: </h3>
              <p className="mb-2">
                Download the latest version of the solar system simulator under «Downloads» or click
                here[HYPERLINK zum Download].{' '}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Extract the Files:</h3>
              <p className="mb-2">
                Locate the downloaded ZIP file and extract its contents to your desired location on
                your computer.{' '}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">3. Run the Simulator: </h3>
              <p className="mb-2">
                Navigate to the extracted folder and find the .exe file (SolarSystemSimulator.exe).{' '}
              </p>
              <p className="mb-2">Double-click the .exe file to launch the simulator. </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">4. First-Time Setup: </h3>
              <p className="mb-2">
                The first time you run the simulator, you may be prompted by your operating system
                to confirm that you trust the application. Confirm and allow the simulator to run.{' '}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">5. Explore the Solar System: </h3>
              <p className="mb-2">
                Once the simulator is running, you can start exploring the solar system!
              </p>
            </div>
          </div>
        );
      case 'GSmainmenu':
        return (
          <div className="max-w-xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Mainmenu </h2>
            <p className="mb-2">
              By starting the application, the main menu is the first screen that appears. It
              presents four clickable buttons:
            </p>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">Explorer</li>
              <li className="mb-2">Sandbox</li>
              <li className="mb-2">Settings</li>
              <li className="mb-2">Quit</li>
            </ol>
            <p className="mb-2">
              Clicking the Explorer button starts the Explorer Mode, where the solar system is
              implemented realistically. The Sandbox button initiates the Sandbox Mode, where you
              can play with the planets and manipulate them. Clicking on Settings will bring up a
              window above the main menu where you can adjust various settings. Lastly, Quit allows
              you to exit the application.{' '}
            </p>
          </div>
        );
      case 'GSsettings':
        return (
          <div className="max-w-xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <p className="mb-2">
              In this window, you can adjust the brightness, sound volume, and graphics settings.
              There are multiple graphic resolutions available, ranging from Low to High.
              Additionally, you can choose whether the application should be displayed in Fullscreen
              mode.
            </p>
          </div>
        );
      case 'CCuicomponents':
        return (
          <div className="max-w-xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Solar System Simulator UI Components </h2>

            <div className=" rounded-lg p-6  mb-6">
              <h3 className="text-lg font-semibold mb-2">Planet Selection</h3>
              <p className="mb-4">
                The User Interface (UI) is one the most important things to understand if you want
                to use a program correctly. Although most UI elements are intuitive, this short
                tutorial will help the user to completely understand each element of the UI.
              </p>
              <p className="mb-4">
                As the functionalities of the Main Menu and Settings panels were already explained
                in the respective previous chapters, this tutorial will focus on the UI of the
                simulation itself.{' '}
              </p>
              <p className="mb-4">
                The following image depicts the starting state of the simulation. The program has
                four interactable elements: the speed slider, the Play / Pause button, the Escape
                button, as well as a third button on the lower part of the screen with an arrow
                pointing upwards.{' '}
              </p>
              <p className="mb-4">placeholderimage</p>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-2">
                  imulation speed slider: since the program depicts the entire solar system,
                  real-time steps would not allow the user to see perceivable planet movements. This
                  slider can be used to increase the time steps, letting the user see movements that
                  would take years to happen in a matter of seconds! – More details about the
                  simulation speed will follow in the “Time Controls” chapter –
                </li>
                <li className="mb-2">
                  Play / Pause button: this button brings the whole simulation to a sudden stop. UI
                  Components will still function as expected, but the bodies in the solar system
                  will stay completely still. This button can be useful for screenshots, as well as
                  for taking some time to examinate each planet and its position.{' '}
                </li>
                <li className="mb-2">
                  Escape button: a left click on this button will halt the simulation and take the
                  user back to the main menu. Once in the main menu, the program can be quitted
                  using the corresponding button, or a new simulation can be started. Be aware that
                  in the current state the program will not save any eventual changes made to the
                  simulation!{' '}
                </li>
                <li className="mb-2">
                  The arrow button: if this button is pressed, a list of planets will raise from the
                  lower part of the screen, as depicted in the following screenshot. One more click,
                  and the list will lower itself to the original position.{' '}
                </li>
              </ol>

              <p className="mb-4">placeholderimage</p>
              <p className="mb-4">
                The list is scrollable, either by moving the white bar on the bottom to the right,
                scrolling with the mouse wheel, or by dragging the planets to the left. Each element
                in the list is interactable: a single left click will open an info tab with details
                about the specific planet (details about the Planet Info Tab will be explained in
                the following chapter), two clicks will move the camera to focus on the planet.{' '}
              </p>
            </div>
          </div>
        );
      case 'CCCammov':
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
      case 'CCCamPre':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Camera Presets</h2>

            <p className="mb-4">
              To enhance the user experience, we have included two camera presets that allow you to
              quickly switch between different perspectives:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Bird's Eye View (Numpad 1)</h3>
              <p className="mb-2">
                Press the '1' key on the numpad to switch to a bird's eye view. This perspective
                provides a top-down view centered around the current pivot point, ideal for getting
                a comprehensive overview of the solar system.{' '}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Side View (Numpad 3)</h3>
              <p className="mb-2">
                {' '}
                Press the '3' key on the numpad to switch to a side view. This perspective offers a
                lateral view of the current pivot point, useful for examining the spatial
                relationships between planets.{' '}
              </p>
            </div>
          </div>
        );
      case 'CCTimeCon':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Time Controls</h2>

            <p className="mb-4">
              You have a Play/Pause button that allows you to stop or start the simulation.
              Positioned at the top left, there is a slider that enables you to control the speed of
              the simulation. The slider scale ranges from 1 to 20, with the selected number
              displayed above it. In Explorer Mode, below the slider, you can also see the current
              date of the simulation. Each increment on the slider corresponds to one day per second
              in terms of planet movement speed.
            </p>
          </div>
        );
      case 'CCPlanSelect':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Planet Selection</h2>

            <p className="mb-4">
              The Planet Selection feature in the Solar System Simulator allows you to easily
              navigate between different celestial bodies within the solar system. Here&apos;s how
              you can use it:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Accessing the Planet Selection</h3>
              <p className="mb-2">
                To access the Planet Selection window, look for the small icon or button located at
                the bottom of the simulator interface. Clicking on this icon will open the Planet
                Selection window.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Selecting a Planet</h3>
              <p className="mb-2">
                Once the Planet Selection window is open, you&apos;ll see a list of available
                planets in the solar system. Each planet will be represented by its name and
                possibly a small icon or image for easy identification.
              </p>
              <p className="mb-2">
                To select a planet, simply click on its name or icon in the Planet Selection window.
                The selected planet will be highlighted, indicating that it&apos;s ready for further
                action.
              </p>
              <p className="mb-2">
                If you want to jump directly to the selected planet, double-click on its name or
                icon. The simulator will adjust the camera position and focus on the selected
                planet, allowing you to explore it up close.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">3. Exploring Planets</h3>
              <p className="mb-2">
                Once you&apos;ve selected a planet, you can use the camera controls to navigate
                around it and observe its features. Zoom in to see surface details, pan around to
                explore different areas, and rotate the camera to view the planet from different
                angles.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">4. Additional Information</h3>
              <p className="mb-2">
                Some planets may have additional information available, such as fun facts, trivia,
                or scientific data. You can access this information by clicking on the planet or
                using any available tooltips or information panels in the simulator interface.
              </p>
            </div>

            <p>
              The Planet Selection feature makes it easy to explore and learn about the various
              planets in our solar system. Whether you&apos;re interested in Earth, Mars, Jupiter,
              or any other celestial body, you can quickly navigate to it and start your cosmic
              journey!
            </p>
          </div>
        );
      case 'CCPlanInfo':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Planet Information</h2>

            <p className="mb-4">
              Each body has its own information tab. This tab is a window on the right side of the
              screen which shows diverse properties of the clicked object. The following screenshot
              provides an example of the Info Tab from the Explorer Mode:
            </p>

            <p className="mb-2">immage placeholder</p>
            <p className="mb-4">immage placeholder</p>
            <p className="mb-2">
              The application currently has twelve “Static Properties” (properties that would not be
              changing in a real-life-like case) and two “Variable Properties” (properties that
              would change depending on the time of measurement).
            </p>
            <ul className="list-disc pl-6">
              <li>Mass: The mass of the body in kg </li>
              <li>
                Body Type: Describes what kind of object the body is. Objects can be Stars, Rocky
                Planets, Dwarf Planets, Moons, Gas Giants, or Ice Giants{' '}
              </li>
              <li>
                Surface Temperature: The range of temperatures to be expected on the surface of the
                selected body in °C{' '}
              </li>
              <li>Radius: The radius size of the object in km </li>
              <li>Gravity: The gravitational pull of the object in g </li>
              <li>Average Orbital Speed (self-explanatory) in km / s </li>
              <li>Satellites: How many satellites are orbiting around the object </li>
              <li>Rings: Presence / absence of rings orbiting the object </li>
              <li>
                Periapsis: The closest distance that the object will achieve between itself and the
                object that it’s been orbiting in km
              </li>
              <li>
                Apoapsis: The furthest distance that the object will achieve between itself and the
                object that it’s been orbiting in km{' '}
              </li>
              <li>
                Orbit Duration: How long it takes for the object to complete a full orbit around the
                object that it’s been orbiting, in terrestrial days{' '}
              </li>
              <li>
                Day Duration: How long it takes for the object to complete a full turn on itself in
                terrestrial days{' '}
              </li>
              <li>Current Speed: The current velocity of the object in the simulation. </li>
              <li>
                Distance to sun: The current distance between the sun and the object in the
                simulation.{' '}
              </li>
            </ul>
            <p className="mb-2">
              The info tab also contains a description field, containing a few facts or curiosities
              about the object.{' '}
            </p>
            <p className="mb-2">
              In the Sandbox Mode the info tab is slightly different: the user is allowed to modify
              the “Static Properties”, as well as the planets description. It can also add new
              “Static Properties” or remove old ones.{' '}
            </p>
            <p className="mb-2">
              {' '}
              In order to add new Properties, the blue “+” button should be pressed. If a property
              needs to be removed, a click on the “-“ button on its left will do it. In case a
              property or the description needs to be edited, double clicking on the text will let
              the user modify the text. The following screenshot depicts an example of Info Tab in
              the Sandbox mode with the relevant buttons.{' '}
            </p>
            <p className="mb-2">image placeholder </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Closing / Switching the Info Tab </h3>
              <p className="mb-2">
                There are multiple ways to close the info tab. The easiest one is to click on the
                red “X” button on the top right corner of the tab.
              </p>
              <p className="mb-2">
                A second way to do it is to click on the same planet list element (the one that was
                clicked to open the tab in the first place) another time.
              </p>
              <p className="mb-2">
                If the intention is to switch between tabs in a quick way, click on a different
                planet list element. This will close the open tab and open a new one, this time with
                the data of the newly clicked list element.
              </p>
            </div>
          </div>
        );
      case 'MOverview':
        return <div>Overview</div>;
      case 'MSimulator':
        return <div>Simulator</div>;
      case 'MSandbox':
        return <div>Sandbox</div>;
      case 'SimOverview':
        return <div>Overview</div>;
      case 'SanUIComp':
        return <div>UI Components</div>;
      case 'SandCamMov':
        return <div>Camera Movement</div>;

      default:
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">
              Welcome to the Solar System Simulator Tutorial
            </h2>

            <p className="mb-2">
              Welcome to our Solar System Simulator tutorial! This guide will help you learn how to
              use our simulator to explore space.
            </p>

            <p className="mb-2">
              Whether you&apos;re a student, a space enthusiast, or just curious, our simulator lets
              you discover planets, moons, and more.
            </p>

            <p>Get ready to explore the wonders of our solar system with us!</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="absolute top-0 left-0 right-0 py-8 z-10 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-gray-300 font-bold pl-10 text-2xl">Solar System Simulator</div>
            <div>
              <a
                href="/"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                Home
              </a>
              <a
                href="/tutorial"
                className="relative inline-block text-gray-300 font-semibold px-4 mx-4 py-1.5 border-b-2 border-gray-300"
              >
                Tutorial
              </a>
              <a
                href="/api"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                API
              </a>
              <a
                href="/about"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 mr-10 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center pt-40 justify-center gap-4">
        <div className="container flex flex-col mx-auto backdrop-blur-sm shadow-2xl bg-white/5">
          <div className="flex">
            <aside className="bg-gray-800 pt-32 text-white w-48 min-h-screen ">
              <nav>
                <ul className="space-y-6 ">
                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2">
                      Getting Started
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('GSinstallation')}
                      >
                        {' '}
                        Installation{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('GSmainmenu')}
                      >
                        {' '}
                        Main menu{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('GSsettings')}
                      >
                        {' '}
                        Settings{' '}
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2 ">
                      Core Conponents
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCuicomponents')}
                      >
                        {' '}
                        UI Components{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCCammov')}
                      >
                        {' '}
                        Camera Movement{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCCamPre')}
                      >
                        {' '}
                        Camera Presets{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCTimeCon')}
                      >
                        {' '}
                        Time Controls{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCPlanSelect')}
                      >
                        {' '}
                        Planet Selection{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCPlanInfo')}
                      >
                        {' '}
                        Planet Information{' '}
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2 ">
                      Modes
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('MOverview')}
                      >
                        {' '}
                        Overview{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('MSimulator')}
                      >
                        {' '}
                        Simulator{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('MSandbox')}
                      >
                        {' '}
                        Sandbox{' '}
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2">
                      Simulator
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('SimOverview')}
                      >
                        {' '}
                        Overview{' '}
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2">
                      Sandbox
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('SanUIComp')}
                      >
                        {' '}
                        UI Components{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('SandCamMov')}
                      >
                        {' '}
                        Camera Movement{' '}
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="flex-grow flex justify-center">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
