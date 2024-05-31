const GSInstallation: React.FC = () => {

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
          •	Navigate to the extracted folder and find the executable file named <span style={{fontWeight: 'bold'}}>SolarSystemSimulator.exe</span>
          </p>
          <p className="mb-2">Double-click the <span style={{fontWeight: 'bold'}}>.exe</span> file to launch the simulator. </p>
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
  };
  
  export default GSInstallation;
  