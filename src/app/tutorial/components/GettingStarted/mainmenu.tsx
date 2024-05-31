const GSmainmenu: React.FC = () => {

    return (
        <div className="max-w-xl mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">Mainmenu </h2>
            <p className="mb-2">
              By starting the application, the main menu is the first screen that appears. It
              presents four clickable buttons:
            </p>
            <img src="/sun.png" alt="Next.js Logo" className="mb-4" />
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">Explorer: Click the Explorer button to start the realistic Explorer Mode.</li>
              <li className="mb-2">Sandbox: Click the Sandbox button to enter Sandbox Mode, where you can play with the planets and manipulate them.</li>
              <li className="mb-2">Settings: Clicking on Settings brings up a window where you can graphics settings or switch to fullscreen.</li>
              <li className="mb-2">Quit: Click Quit to exit the application.</li>
            </ol>
          </div>
    );
  };
  
  export default GSmainmenu;
  