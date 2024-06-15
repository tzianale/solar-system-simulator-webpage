const CGPlanetInformation: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-2xl font-semibold mb-4">Planet Information</h2>

      <p className="mb-4">
        Each celestial body in the simulation is represented with its own information tab. This tab
        appears as a window on the right side of the screen and displays various properties of the
        selected object. The following screenshot provides an example of the Info Tab from the
        Explorer Mode:
      </p>

      <div className=" flex justify-center ">
        <img src="/Planetinormation12.png" alt="Next.js Logo" className="mb-4 w-9/12" />
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Properties Displayed</h3>

      <p className="mb-2">The explorer mode categorizes the properties into two main types:</p>

      <div className="bg-gray-800 rounded-lg px-3 shadow-lg grid grid-cols-2 grid-rows-1">
        <div>
          <h4 className="text-lg font-semibold mt-4 mb-2">
            Editable Properties (properties that don’t have an impact on the simulation, aka for
            information only):
          </h4>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <span className=" font-bold ">Mass:</span> The mass of the body in kg{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Body Type: </span> Describes what kind of object the body
              is. Objects can be Stars, Rocky Planets, Dwarf Planets, Moons, Gas Giants, or Ice Giants{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Surface Temperature</span> The range of temperatures to be
              expected on the surface of the selected body in °C{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Radius:</span> The radius size of the object in km{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Gravity:</span> The gravitational pull of the object in g{' '}
            </li>

            <li className="mb-2">Average Orbital Speed (self-explanatory) in km / s </li>

            <li className="mb-2">
              <span className=" font-bold ">Satellites:</span> How many satellites are orbiting around
              the object{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Rings:</span> Presence / absence of rings orbiting the
              object{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Periapsis:</span> The closest distance that the object will
              achieve between itself and the object that it&apos;s been orbiting in km
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Apoapsis:</span> The furthest distance that the object will
              achieve between itself and the object that it&apos;s been orbiting in km{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Orbital Period:</span> How long it takes for the object to
              complete a full orbit around the object that it&apos;s been orbiting, in terrestrial days{' '}
            </li>
            <li className="mb-2">
              <span className=" font-bold ">Day Duration:</span> How long it takes for the object to complete a full turn on itself in
              terrestrial days{' '}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mt-4 mb-2"> Live Stats (properties that change over time)</h4>
          <ul className="list-disc pl-6">
            <li className="mb-2"><span className=" font-bold ">Current Speed:</span> The current velocity of the object in the simulation. </li>
            <li className="mb-2">
              <span className=" font-bold ">Distance to Sun:</span> The current distance between the sun and the object in the simulation.{' '}
            </li>
          </ul>
        </div>
      </div>




      <p className="mb-2 mt-4">
        The Info Tab also includes a description field, which contains interesting facts or
        curiosities about the object. You can also edit the description to add your own notes.
      </p>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          Press the blue{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            + button
          </span>{' '}
          to introduce add a new editable property.{' '}
        </li>
        <li className="mb-2">
          Press on the{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            - button
          </span>{' '}
          next to a property to remove it.{' '}
        </li>
        <li className="mb-2">
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Double click
          </span>{' '} on any text to edit the property value or the
          description itself.
        </li>
      </ul>
    </div>
  );
};

export default CGPlanetInformation;
