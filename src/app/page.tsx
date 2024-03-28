import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className=" p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-gray-300 font-bold pl-10 text-2xl">Solar System Simulator</div>
            <div>
              <a
                href="page.tsx"
                className="relative inline-block text-gray-300 font-semibold px-4 mx-4 py-1.5 border-b-2 border-gray-300 "
              >
                Home
              </a>
              <a
                href="page.tsx"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                Tutorial
              </a>
              <a
                href="page.tsx"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                API
              </a>
              <a
                href="page.tsx"
                className="group relative inline-block text-gray-300 font-semibold mx-4px-4 py-2 mr-10 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative flex-1 flex flex-col items-center justify-center">
    {/* Text: Explore our Solar System */}
    <div className="absolute top-20 text-white text-4xl font-semibold">
      Explore our Solar System
    </div>

    {/* Particles component */}
    <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      quantity={100}
    />
  </main>

  </div>
  );
}
