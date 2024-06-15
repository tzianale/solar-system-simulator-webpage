const SMPlanet: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
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

      <div className=" flex justify-center ">
        <img src="/planetinformation3.png" alt="Next.js Logo" className="mb-4" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Closing / Switching the Info Tab </h3>
        <p className="mb-2">
          <span className=" font-bold ">Close the Info Tab:</span> You can click the red{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            X button
          </span>{' '}
          in the top right corner or click on the same planet in the planet list again.
        </p>
        <p className="mb-2">
          <span className=" font-bold ">Switch between Tabs:</span> Clicking on a different planet
          in the list will close the current tab and open a new one with data for the newly selected
          planet.
        </p>
      </div>
    </div>
  );
};

export default SMPlanet;
