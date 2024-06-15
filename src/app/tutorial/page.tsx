// @client
'use client';
import { useState } from 'react';
import GSInstallation from './components/GettingStarted/installation';
import GSmainmenu from './components/GettingStarted/mainmenu';
import GSSettings from './components/GettingStarted/settings';
import CGCameraMovement from './components/CoreComponents/cameramovement';
import CGCameraPresets from './components/CoreComponents/camerapresets';
import CGPlanetInformation from './components/CoreComponents/planetinformation';
import CGTimeControl from './components/CoreComponents/timecontrol';
import CGUIComponents from './components/CoreComponents/uicomponents';
import SMcreatecelestialbodies from './components/SandboxMode/createcelestialbodies';
import SMPlanet from './components/SandboxMode/planetinfosim';
import SMoverview from './components/SandboxMode/sandboxoverview';
import EXPoverview from './components/ExplorerMode/exploreroverview';
import EXPdateselection from './components/ExplorerMode/dateselect';

export default function Home() {
  const [selecedTopic, setSelectedTopic] = useState('');

  const renderContent = () => {
    switch (selecedTopic) {
      case 'GSinstallation':
        return <GSInstallation />;
      case 'GSmainmenu':
        return <GSmainmenu />;
      case 'GSsettings':
        return <GSSettings />;
      case 'CCuicomponents':
        return <CGUIComponents />;
      case 'CCCammov':
        return <CGCameraMovement />;
      case 'CCCamPre':
        return <CGCameraPresets />;
      case 'CCTimeCon':
        return <CGTimeControl />;
      case 'CCPlanInfo':
        return <CGPlanetInformation />;
      case 'ExpOverview':
        return <EXPoverview/>;
      case 'ExpDateSelec':
        return <EXPdateselection/>;
      case 'SandOverview':
        return <SMoverview/>;
      case 'SandBodCrea':
        return (<SMcreatecelestialbodies/>)
      case 'SandPlanInfo':
        return <SMPlanet/>

      default:
        return (
          <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
            <h2 className="text-xl font-semibold mb-2">
              Welcome to the Solar System Simulator Tutorial
            </h2>

            <p className="mb-2">
              This guide will help you learn how to use our simulator to explore space.
            </p>
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

      <div className="flex flex-col items-center pt-28 justify-center gap-4">
        <div className="container flex flex-col mx-auto backdrop-blur-sm shadow-2xl bg-white/5">
          <div className="flex">
            <aside className="bg-gray-800 pt-5 text-white w-48 min-h-screen ">
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
                      Core Components
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
                        onClick={() => setSelectedTopic('CCPlanInfo')}
                      >
                        {' '}
                        Planet Information{' '}
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2">
                    Explorer Mode
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('ExpOverview')}
                      >
                        {' '}
                        Overview{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('ExpDateSelec')}
                      >
                        {' '}
                        Date Selection{' '}
                      </button>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center text-md pb-2 font-bold px-2">
                      Sandbox Mode
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('SandOverview')}
                      >
                        {' '}
                        Overview{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('SandBodCrea')}
                      >
                        {' '}
                        Create Celestial Body{' '}
                      </button>
                    </div>
                    <div className="flex items-center justify-center text-sm p-2 text-gray-400 ">
                      <button
                        className="hover:text-gray-200 "
                        onClick={() => setSelectedTopic('SandPlanInfo')}
                      >
                        {' '}
                        Planet Information{' '}
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
            </aside>

            <div className="flex-grow flex justify-center w-full h-full">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
