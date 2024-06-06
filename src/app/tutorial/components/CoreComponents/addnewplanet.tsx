const CGPlanetInformation: React.FC = () => {
    return (
      <div className="max-w-xl mx-auto my-8 p-4">
        <h2 className="text-xl font-semibold mb-2">Planet Information</h2>
  
        <p className="mb-4">
        In Sandbox mode, you can create new celestial bodies in the simulation to test the gravitational impact of different bodies with varying masses. To do so, click the "Add New Body" button at the top of the UI. 
        </p>
  
    
        <h3 className="text-lg font-semibold mt-4 mb-2">Properties Displayed:</h3>
  
        <p className="mb-2">
          The application currently has twelve “Static Properties” (properties that would not be
          changing in a real-life-like case) and two “Variable Properties” (properties that would
          change depending on the time of measurement).
        </p>
        <p className="mb-2 mt-4">
              The  "Static Properties” are:
          </p>
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
          <p className="mb-2 mt-4">
              The two “Variable Properties” are:
          </p>
          <ul className="list-disc pl-6">
          <li>Current Speed: The current velocity of the object in the simulation. </li>
          <li>
            Distance to sun: The current distance between the sun and the object in the simulation.{' '}
          </li>
        </ul>
  
        <p className="mb-2 mt-4">
          The Info Tab also includes a description field, which contains interesting facts or curiosities about the object.
        </p>
  
  
          <h3 className="text-lg font-semibold mt-4 mb-2">Interactive Features in Sandbox Mode:</h3>
  
        <p className="mb-2">
        In the Sandbox Mode the info tab is slightly different: the user is allowed to modify the “Static Properties”, as well as the planets description. It can also add new “Static Properties” or remove old ones.
        </p>
          <ul className="list-disc pl-6">
          <li>Add New Property: Press the blue "+" button to introduce a new static property.</li>
          <li>
          Remove Property: Click the "-" button next to a property to remove it.
          </li>
          <li>
          Edit Property or Description: Double-click on any text to edit the property value or the description itself.
          </li>
        </ul>
        <p className="mb-2">The following screenshot depicts an example of Info Tab in the Sandbox mode with the relevant buttons. </p>
  
        <img src="/planeteninformation3.png" alt="Next.js Logo" className="mb-4" />
  
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Closing / Switching the Info Tab </h3>
          <p className="mb-2">
          Close the Info Tab: You can click the red "X" button in the top right corner or click on the same planet in the planet list again.
          </p>
          <p className="mb-2">
          Switch between Tabs: Clicking on a different planet in the list will close the current tab and open a new one with data for the newly selected planet.
          </p>
        </div>
      </div>
    );
  };
  
  export default CGPlanetInformation;
  