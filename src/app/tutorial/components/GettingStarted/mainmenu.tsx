const GSmainmenu: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-2xl font-semibold mb-4">Main menu </h2>
      <p className="mb-2">
        By starting the application, the main menu is the first screen that appears. It presents
        four clickable buttons:
      </p>
      <img src="/mainmenu1.png" alt="Next.js Logo" className="mb-4" />
      <ul className=" list-disc pl-6 mb-6">
        <li className="mb-2">
          Explorer: Click on{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Explorer
          </span>{' '}
          to start the realistic Explorer Mode.
        </li>
        <li className="mb-2">
          Sandbox: Click on{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Sandbox
          </span>{' '}
          to enter Sandbox Mode, where you can play with the planets and manipulate them.
        </li>
        <li className="mb-2">
          Settings: Clicking on{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Settings
          </span>{' '}
          brings up a window where you can adjust graphics settings.
        </li>
        <li className="mb-2">
          Quit: Click on{' '}
          <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">
            Quit
          </span>{' '}
          to exit the application.
        </li>
      </ul>
    </div>
  );
};

export default GSmainmenu;
