const EXPoverview: React.FC = () => {

    return (
        <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
            <h2 className="text-2xl font-semibold mb-4">Explorer Overview</h2>
            <p className="mb-2">
                In the Explorer Mode, you can visit our Solar System in its entirety. From Mercury to Neptune, all the planets are included in the simulation, with our Sun at the center for you to explore. You can speed up the simulation to go into the future or past, or even choose a specific date to see the constellation of the planets at that time. All this is possible with the calculations of Kepler&apos;s laws.
            </p>
            <div className=" flex justify-center ">
                <img src="/explorermode.png" alt="Next.js Logo" className="mb-4 w-9/12" />
            </div>
        </div>
    );
};

export default EXPoverview;
