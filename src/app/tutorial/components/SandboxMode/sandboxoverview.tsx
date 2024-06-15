const SMoverview: React.FC = () => {

    return (
        <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
            <h2 className="text-2xl font-semibold mb-4">Sandbox Overview</h2>
            <p className="mb-2">
                In the Sandbox Mode, the celestial bodies are affected by gravity. Each body present in the simulation is influenced by the others, due to the calculation of the gravitational force between two celestial bodies. Here, you can edit the attributes necessary for calculating the gravitational force to see the impact, or add completely new celestial bodies to create your own personal solar system.
            </p>
            <div className=" flex justify-center ">
                <img src="/sandboxmode.png" alt="Next.js Logo" className="mb-4 w-9/12" />
            </div>
        </div>
    );
};

export default SMoverview;
