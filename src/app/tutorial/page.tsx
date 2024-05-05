// @client
'use client';
import { useState } from 'react';

export default function Home() {
  const [selecedTopic, setSelectedTopic] = useState("");

  const renderContent = () => {
    switch (selecedTopic) {
      case 'GSinstallation':
        return (
          <div className="max-w-xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Installation Instructions</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">
                Download the game files from the official website or repository.
              </li>
              <li className="mb-2">Extract the downloaded files to a location of your choice.</li>
              <li className="mb-2">Open the extracted folder.</li>
              <li className="mb-2">Run the game executable file to start the simulation.</li>
            </ol>
            <p className="mb-2">
              Follow the on-screen instructions to set up your simulation environment.
            </p>
            <p>Enjoy exploring the universe in your simulation game!</p>
          </div>
        );
      case 'CCuicomponents':
        return (
          <div className="max-w-xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Solar System Simulator Components</h2>

            <div className=" rounded-lg p-6  mb-6">
              <h3 className="text-lg font-semibold mb-2">Planet Selection</h3>
              <p className="mb-4">
                Planet selection allows users to choose which celestial body they want to focus on
                within the solar system. It is commonly used to switch between different planets for
                observation or analysis.
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500">
                <option value="mercury">Mercury</option>
                <option value="venus">Venus</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
              </select>
            </div>

            <div className=" rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Time Controls</h3>
              <p className="mb-4">
                Time controls allow users to manipulate the simulations time settings, such as
                speeding up, slowing down, or pausing time. It is commonly used to observe celestial
                events at different speeds or timeframes.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Play
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Pause
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Reset
                </button>
              </div>
            </div>

            <div className=" rounded-lg p-6 ">
              <h3 className="text-lg font-semibold mb-2">Camera Movement</h3>
              <p className="mb-4">
                Camera movement controls allow users to navigate and explore the solar system
                simulation from different perspectives. It is commonly used to zoom in, zoom out,
                rotate, and pan around the solar system.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Zoom In
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Zoom Out
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Rotate Left
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Rotate Right
                </button>
              </div>
            </div>
          </div>
        );
      case 'CCCammov':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Camera Movement Controls</h2>

            <p className="mb-4">
              In the Solar System Simulator, you can control the camera to navigate through space
              and explore celestial bodies. Here&apos;s how you can move the camera:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Rotation</h3>
              <p className="mb-2">To rotate the camera and change your viewing angle:</p>
              <ul className="list-disc pl-6">
                <li>Click and hold the left mouse button.</li>
                <li>Move the mouse in any direction to rotate the camera.</li>
              </ul>
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
              In the Solar System Simulator, camera presets allow you to quickly change the camera
              position and orientation for different viewing angles and perspectives. Here&apos;s a
              detailed explanation of each camera preset:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Top-Down View</h3>
              <p className="mb-2">
                Press the <strong>1</strong> key to switch to a top-down view of the solar system.
                This preset provides an overhead perspective looking down on the planets and their
                orbits. It&apos;s ideal for observing the alignment of planets and their orbits relative
                to each other.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Front View</h3>
              <p className="mb-2">
                Press the <strong>2</strong> key to switch to a front-facing view of the solar
                system. This preset positions the camera in front of the planets, allowing you to
                see them from a frontal perspective. It&apos;s useful for getting a closer look at
                individual planets or observing their details.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">3. Side View</h3>
              <p className="mb-2">
                Press the <strong>3</strong> key to switch to a side view of the solar system. This
                preset positions the camera to the side of the planets, giving you a profile view of
                the solar system. It&apos;s great for observing the relative positions of planets and
                moons from a different angle.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">4. Zoomed Out</h3>
              <p className="mb-2">
                Press the <strong>4</strong> key to zoom out and view the entire solar system from a
                distance. This preset provides an overview of the entire solar system with all
                planets visible. It&apos;s perfect for getting a big-picture view of the solar system and
                its layout.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">5-8. Custom Presets</h3>
              <p className="mb-2">
                Press the <strong>5</strong> to <strong>8</strong> keys to access custom camera
                presets. These presets can be configured to your liking, allowing you to save and
                quickly switch between different camera angles and positions. You can set up custom
                presets for specific planets, constellations, or other celestial features.
              </p>
            </div>

            <p>
              With camera presets, you can easily explore the solar system from various viewpoints
              and angles without manually adjusting the camera every time. Experiment with different
              presets to find the perfect perspective for your exploration!
            </p>
          </div>
        );
      case 'CCTimeCon':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Time Controls</h2>

            <p className="mb-4">
              The Time Controls feature in the Solar System Simulator allows you to manipulate the
              passage of time within the simulation. Here are the available time control options:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Real-Time Mode</h3>
              <p className="mb-2">
                In Real-Time mode, the simulation progresses at the same rate as real-world time.
                Planetary positions and movements are synchronized with actual celestial events.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Time Warp</h3>
              <p className="mb-2">
                Time Warp allows you to accelerate or decelerate the simulation speed. You can
                adjust the time warp factor to speed up or slow down time within the simulation,
                enabling you to observe long-term changes or rapid events.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">3. Custom Time Settings</h3>
              <p className="mb-2">
                Some simulators may offer additional options for customizing time settings, such as:
              </p>
              <ul className="list-disc pl-6">
                <li>Adjusting the time scale (e.g., days per second, years per minute).</li>
                <li>Setting specific dates or time intervals for simulation playback.</li>
              </ul>
              <p className="mb-2">
                These controls allow you to tailor the simulation experience to your preferences and
                research interests.
              </p>
            </div>

            <p>
              The Time Controls feature provides flexibility and customization options for exploring
              the passage of time within the solar system simulation, enabling you to observe
              celestial phenomena at your desired pace.
            </p>
          </div>
        );
      case 'CCPlanSelect':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Planet Selection</h2>

            <p className="mb-4">
              The Planet Selection feature in the Solar System Simulator allows you to easily
              navigate between different celestial bodies within the solar system. Here&apos;s how you
              can use it:
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
                Once the Planet Selection window is open, you&apos;ll see a list of available planets in
                the solar system. Each planet will be represented by its name and possibly a small
                icon or image for easy identification.
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
                Once you&apos;ve selected a planet, you can use the camera controls to navigate around it
                and observe its features. Zoom in to see surface details, pan around to explore
                different areas, and rotate the camera to view the planet from different angles.
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
              planets in our solar system. Whether you&apos;re interested in Earth, Mars, Jupiter, or any
              other celestial body, you can quickly navigate to it and start your cosmic journey!
            </p>
          </div>
        );
      case 'CCPlanInfo':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Planet Information</h2>

            <p className="mb-4">
              The Planet Information feature in the Solar System Simulator provides detailed data
              and facts about each celestial body in the solar system. Here&apos;s how you can access and
              utilize it:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Accessing Planet Information</h3>
              <p className="mb-2">
                To view information about a specific planet, click on the planet within the
                simulator interface. A pop-up window or panel will appear, displaying detailed data
                and facts about the selected planet.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Exploring Planet Data</h3>
              <p className="mb-2">
                The Planet Information window typically includes various categories of data, such
                as:
              </p>
              <ul className="list-disc pl-6">
                <li>Basic planetary information (e.g., name, diameter, mass).</li>
                <li>Physical characteristics (e.g., atmosphere, surface features).</li>
                <li>Orbital parameters (e.g., distance from the sun, orbital period).</li>
                <li>Scientific discoveries and missions related to the planet.</li>
              </ul>
              <p className="mb-2">
                You can navigate through these categories to learn more about the selected planet
                and its properties.
              </p>
            </div>

            <p>
              The Planet Information feature allows users to deepen their understanding of each
              celestial body in the solar system by providing comprehensive data and facts at their
              fingertips.
            </p>
          </div>
        );
      case 'CCPlanOrbit':
        return (
          <div className="max-w-xl mx-auto my-8 p-4">
            <h2 className="text-xl font-semibold mb-2">Planet Orbits</h2>

            <p className="mb-4">
              The Planet Orbits feature in the Solar System Simulator visualizes the paths and
              trajectories of planets as they orbit the sun. Here&apos;s how you can explore planetary
              orbits:
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">1. Viewing Planet Orbits</h3>
              <p className="mb-2">
                To observe the orbits of planets, click on a specific planet within the simulator
                interface. A visual representation of the planet&apos;s orbit will be displayed, showing
                its elliptical path around the sun.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">2. Understanding Orbital Mechanics</h3>
              <p className="mb-2">
                The Planet Orbits visualization provides insights into the principles of orbital
                mechanics, including:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Elliptical orbits: Learn about the shape and characteristics of planetary orbits.
                </li>
                <li>
                  Orbital speed: Understand how planets move at different speeds along their orbits.
                </li>
                <li>
                  Orbital inclination: Explore the tilt and orientation of planetary orbits relative
                  to the ecliptic plane.
                </li>
              </ul>
              <p className="mb-2">
                You can observe these orbital features to gain a deeper understanding of the
                dynamics of our solar system.
              </p>
            </div>

            <p>
              The Planet Orbits feature offers a fascinating insight into the complex dynamics of
              planetary motion, allowing users to visualize and explore the paths of planets as they
              travel through space.
            </p>
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
              Whether you&apos;re a student, a space enthusiast, or just curious, our simulator lets you
              discover planets, moons, and more.
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
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('CCPlanOrbit')}
                      >
                        {' '}
                        Planet Orbits{' '}
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
