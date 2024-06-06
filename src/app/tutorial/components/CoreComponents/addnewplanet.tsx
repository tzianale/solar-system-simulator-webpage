const CGPlanetInformation: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto my-8 p-4">
      <h2 className="text-xl font-semibold mb-2">Adding New Celestial Bodies</h2>

      <p className="mb-4">
        In Sandbox mode, you can create new celestial bodies in the simulation to test the
        gravitational impact of different bodies with varying masses. To do so, click the{' '}
        <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
          Add new Planet button
        </span>{' '}
        at the top of the UI.
      </p>
      <p className="mb-4">
        After clicking the button, a new window opens where you can input the following parameters
        for your new celestial body:{' '}
      </p>

      <ul className="list-disc pl-6">
        <li>Name: The name of your celestial body.</li>
        <li>Type: The type of celestial body (Sun, Planet, Moon).</li>
        <li>Mass: The mass relative to Earths mass; must be a positive number.</li>
        <li>Diameter: The diameter relative to Earths diameter; must be a positive number.</li>
        <li>
          Position: XYZ coordinates relative to the universes center (1 Astronomical Unit = 1000).{' '}
        </li>
        <li>
          Initial Velocity: XYZ values in km/s for the starting velocity of your celestial body.{' '}
        </li>
        <li>Color: A new window opens where you can choose the color of your celestial body. </li>
      </ul>
    </div>
  );
};

export default CGPlanetInformation;
