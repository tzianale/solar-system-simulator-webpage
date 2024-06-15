const SMcreatecelestialbodies: React.FC = () => {

    return (
        <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
            <h2 className="text-2xl font-semibold mb-4">Create Celestial Bodies</h2>
            <p className="mb-2">
                In Sandbox mode, you can create new celestial bodies in the simulation to test the gravitational impact of different bodies with varying masses. To do so, click the <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">Add New Body</span> button at the top of the UI.
            </p>
            <p className="mb-2">
                After clicking the button, a new window opens where you can input the following parameters for your new celestial body:
            </p>
            <ol className="list-disc pl-6 mb-6">
                <li className="mb-2"><strong>Name:</strong> The name of your celestial body.</li>
                <li className="mb-2"><strong>Type:</strong> The type of celestial body (Sun, Planet, Moon).</li>
                <li className="mb-2"><strong>Mass:</strong> The mass relative to Earth&apos;s mass; must be a positive number.</li>
                <li className="mb-2"><strong>Diameter:</strong> The diameter relative to Earth&apos;s diameter; must be a positive number.</li>
                <li className="mb-2"><strong>Position:</strong> XYZ coordinates relative to the universe&apos;s center (1 Astronomical Unit = 1000).</li>
                <li className="mb-2"><strong>Initial Velocity:</strong> XYZ values in km/s for the starting velocity of your celestial body.</li>
                <li className="mb-2"><strong>Color:</strong> A new window opens where you can choose the color of your celestial body.</li>
            </ol>
            <img src="/createcelestialbody.gif" alt="Next.js Logo" className="mb-4 w-9/12" />
            <p className="mb-2">
                All fields must be filled out with valid values. If any fields are invalid, the corresponding field will be highlighted in red.
            </p>
            <p className="mb-2">
                Once all fields are correctly filled out, you can click the <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">Create</span> button to add your new celestial body to the simulation. You will see it in the simulation and observe its gravitational impact on the other celestial bodies. There will also be a new entry for your celestial body in the list below, along with an info tab that appears when you click the entry. Visit the Planet Information section to learn how to use the info tab.
            </p>
            <img src="/shownewcelestialbody.gif" alt="Next.js Logo" className="mb-4  w-9/12" />
            <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 mb-6">
                <strong>Keep in mind:</strong> Depending on the status of the other celestial bodies in the simulation, various occurrences may happen. For example, if the new celestial body has a large enough mass, it might pull all other celestial bodies towards it. Alternatively, if the new celestial body has a high initial velocity, it might not be significantly affected by the gravitational forces of the other celestial bodies. It all depends on your inputs.
            </div>
        </div>
    );
};

export default SMcreatecelestialbodies;
