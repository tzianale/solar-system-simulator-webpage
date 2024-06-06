const CGPlanetInformation: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-xl font-semibold mb-2">Planet Information</h2>

      <p className="mb-4">
        Each celestial body in the simulation is represented with its own information tab. This tab
        appears as a window on the right side of the screen and displays various properties of the
        selected object. The following screenshot provides an example of the Info Tab from the
        Explorer Mode:
      </p>

      <img src="/Planetinormation12.png" alt="Next.js Logo" className="mb-4" />

      <h3 className="text-lg font-semibold mt-4 mb-2">Properties Displayed:</h3>

      <p className="mb-2">
      The explorer mode categorizes the properties into two main types:
      </p>
      <p className="mb-2 mt-4">Editable Properties (properties that don’t have an impact on the simulation, aka for information only):</p>
      <ul className="list-disc pl-6">
        <li>Mass: The mass of the body in kg </li>
        <li>
          Body Type: Describes what kind of object the body is. Objects can be Stars, Rocky Planets,
          Dwarf Planets, Moons, Gas Giants, or Ice Giants{' '}
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
          Periapsis: The closest distance that the object will achieve between itself and the object
          that it’s been orbiting in km
        </li>
        <li>
          Apoapsis: The furthest distance that the object will achieve between itself and the object
          that it’s been orbiting in km{' '}
        </li>
        <li>
          Orbit Duration: How long it takes for the object to complete a full orbit around the
          object that it’s been orbiting, in terrestrial days{' '}
        </li>
        <li>
          Day Duration: How long it takes for the object to complete a full turn on itself in
          terrestrial days{' '}
        </li>
      </ul>
      <p className="mb-2 mt-4"> Live Stats (properties that change over time)</p>
      <ul className="list-disc pl-6">
        <li>Current Speed: The current velocity of the object in the simulation. </li>
        <li>
          Distance to sun: The current distance between the sun and the object in the simulation.{' '}
        </li>
      </ul>

      <p className="mb-2 mt-4">
        The Info Tab also includes a description field, which contains interesting facts or
        curiosities about the object. The interactive features in the Explorer mode are the
        following:
      </p>
      <ul className="list-disc pl-6">
        <li>
          • Add New Property: Press the blue{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            + button
          </span>{' '}
          to introduce a new editable property.{' '}
        </li>
        <li>
          Remove Property: Click the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            - button
          </span>{' '}
          next to a property to remove it.{' '}
        </li>
        <li>
          Edit Property or Description: Double-click on any text to edit the property value or the
          description itself.
        </li>
      </ul>
      <p className="mb-2 mt-4">
        The eventual changes in properties and descriptions are partially saved: the values are
        reset to default as soon as the user goes back to the main menu or closes the program. Until
        then, all changes will be saved in the respective info tabs, even if the user switches
        between planets.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">Interactive Features in Sandbox Mode:</h3>

      <p className="mb-2">
        In the Sandbox Mode the info tab is slightly different: there is a new category of
        properties, the Variable ones, which, when changed, will impact the simulation.
      </p>
      <p className="mb-2">
        The following screenshot depicts an example of Info Tab in the Sandbox mode with the
        relevant buttons.{' '}
      </p>

      <img src="/planetinformation3.png" alt="Next.js Logo" className="mb-4" />

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Closing / Switching the Info Tab </h3>
        <p className="mb-2">
          Close the Info Tab: You can click the red{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            X button
          </span>{' '}
          in the top right corner or click on the same planet in the planet list again.
        </p>
        <p className="mb-2">
          Switch between Tabs: Clicking on a different planet in the list will close the current tab
          and open a new one with data for the newly selected planet.
        </p>
      </div>
    </div>
  );
};

export default CGPlanetInformation;
