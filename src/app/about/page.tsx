import Team from '@/components/Team';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-slate-600">
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
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2 rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                Tutorial
              </a>

              <a
                href="/api"
                className="group relative inline-block text-gray-300 font-semibold mx-4 px-4 py-2  rounded-2xl transition duration-300 before:absolute before:left-1/2 before:right-1/2 before:bottom-0 before:h-0.5 before:bg-gray-300 before:transition-all before:duration-300 hover:before:left-0 hover:before:right-0"
              >
                API
              </a>
              <a
                href="/about"
                className="relative inline-block text-gray-300 font-semibold mr-10 px-4 mx-4 py-1.5 border-b-2 border-gray-300"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center pt-40 justify-center gap-4">
        <div className="text-5xl font-semibold"> Meet our Team</div>
      </div>
      <Team></Team>

      <div className="flex flex-col items-center justify-center pt-36 ">
        <div className="text-5xl font-semibold">About the Project</div>
        <div className="max-w-3xl text-lg px-6 py-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sollicitudin libero.
          Integer gravida eleifend eros id vehicula. Sed in bibendum eros. In hac habitasse platea
          dictumst. Nulla facilisi. Vestibulum id leo nec ipsum finibus consectetur. Cras at
          ullamcorper eros. Proin lobortis interdum magna nec euismod. Aenean scelerisque quam sit
          amet justo rutrum, vel vestibulum nulla vulputate. Nunc posuere risus vitae nulla
          fermentum, id faucibus felis fermentum. Mauris vehicula ut lacus id vestibulum. Donec
          vitae luctus mi. Pellentesque sit amet tristique nisi, sit amet accumsan purus. Nulla
          facilisi. Duis lobortis urna at pharetra varius. Quisque commodo felis eros, sed volutpat
          enim ultricies eu. Fusce consectetur, libero at pharetra elementum, odio ex viverra justo,
          at ultricies arcu tellus ac magna. Vestibulum fermentum elit non tortor pellentesque, et
          facilisis nisi rutrum. Mauris mattis tortor sed nisl bibendum, at gravida lorem tincidunt.
          Nulla vestibulum interdum erat, vitae lacinia ante condimentum ac. Sed fringilla velit in
          ante condimentum, nec tristique orci laoreet. Aenean euismod ligula vel feugiat efficitur.
          Duis fermentum id sapien non fermentum. Nullam vitae pulvinar ligula. Cras maximus eros
          quis est vulputate, at tempus libero interdum. Suspendisse potenti. Ut tincidunt dui quis
          lorem varius fringilla. Nam vitae velit at ipsum molestie efficitur. Fusce elementum
          ultricies felis, id fermentum libero luctus sit amet. Curabitur vel posuere dolor.
          Phasellus venenatis tristique nulla, in vehicula orci mattis sed. Nullam non ante nec orci
          pellentesque tempor. Fusce auctor rhoncus nibh, nec consequat enim tincidunt ut. Nullam
          bibendum odio felis, sed venenatis eros eleifend sit amet. Nulla facilisi. Nulla at mi ut
          magna aliquam sollicitudin vel a ex. In varius, enim a pellentesque consequat, risus enim
          bibendum nulla, at rhoncus odio lorem ac turpis. Praesent at nisi nec risus volutpat
          dictum sed vel risus. Proin fermentum quam at libero tristique, vel viverra dui gravida.
          Donec vestibulum risus sit amet vehicula dignissim. Nam sed ligula
        </div>
      </div>
    </div>
  );
}
