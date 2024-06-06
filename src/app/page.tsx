import Particles from '@/components/Particles';

export default function Home() {
  return (
    <div className="flex flex-col min-h-max bg-black max-w-full no-scrollbar ">
      <Particles className="absolute inset-0 z-2000 animate-fade-in" quantity={300} />
      <nav className="absolute top-0 left-0 right-0 py-8 z-1 backdrop-blur-sm ">
        <div className="container mx-auto  ">
          <div className="flex items-center justify-between">
            <div className="text-gray-300 font-bold pl-10 text-2xl">Solar System Simulator</div>
            <div>
              <a
                href="/"
                className="relative inline-block text-gray-300 font-semibold px-4 mx-4 py-1.5 border-b-2 border-gray-300 "
              >
                Home
              </a>
              <a
                href="/tutorial"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
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

      <div className=" min-h-max z-11 ">
        <div className="flex-1 flex items-center h-screen justify-center">
          <div className="font-bold text-4xl p-4" style={{ backdropFilter: 'blur(4px)' }}>
            Welcome to our Solar System!
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
            Scroll down for more
          </div>
        </div>

        <div className="flex-1 flex items-center h-screen z-5 justify-center relative">
          <Particles className="absolute inset-0 z-100 animate-fade-in" quantity={100} />
          <div className="relative isolate overflow-hidden backdrop-blur-sm  bg-white/5 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Create your own
                <br />
                Solar System
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Discover our Solar System Simulator—explore, manipulate, and create planets.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Download
                </a>
                <a href="/" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center h-screen bg-gradient-to-b from-black to-blue-950 justify-center relative">
          <Particles className="absolute inset-0 z-11 animate-fade-in" quantity={20} />

          <div className="relative isolate overflow-hidden backdrop-blur-sm  bg-white/5 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Solar System
                <br />
                for Studends
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Engage students with our Solar System simulator! Explore space, learn physics, and
                spark curiosity in the classroom.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact us
                </a>
                <a href="/" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex items-center bg-gradient-to-b from-blue-950 to-blue-800 h-screen justify-center">
          <img src="/Erde.png" alt="Next.js Logo" className="absolute bottom-0 z-0" />
          <div className="relative z-10 isolate overflow-hidden backdrop-blur-sm  bg-white/5 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Explore
                <br />
                With our API
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Designed with the needs of hobbyist astronomers in mind, our user-friendly API
                seamlessly grants access to precise planet locations
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start Now!
                </a>
                <a href="./about" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
