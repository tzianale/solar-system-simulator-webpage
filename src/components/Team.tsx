// Code for Team component
const Team: React.FC = () => {

  return (
    <div className="relative max-w-screen-lg mx-auto grid gap-12 mt-20 justify-center z-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
    <div className=" overflow-hidden  relative  py-8 px-6 backdrop-blur-sm rounded-3xl hover:bg-white/10 shadow-2xl bg-white/5 flex flex-col items-center justify-center gap-3 group">
      <div className="text-2xl font-semibold">Riccardo Maffei</div>
      <div className="text-lg text-gray-300">mafferic</div>
      <div className="img w-[120px] aspect-square overflow-hidden bg-gray-100 z-40 rounded-3xl">
        <img src="https://github.com/CapezOnMyBack.png" alt="profilepic" />
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <p className="font-semibold text-xs text-white">mafferic@students.zhaw.ch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" overflow-hidden  relative  py-8 px-6 backdrop-blur-sm rounded-3xl shadow-2xl hover:bg-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 group">
      <div className="text-2xl font-semibold">Ivan Starcevic</div>
      <div className="text-lg text-gray-300">starciva</div>
      <div className="img w-[120px] aspect-square overflow-hidden bg-gray-100 z-40 rounded-3xl">
        <img src="https://github.com/CapezOnMyBack.png" alt="profilepic" />
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <p className="font-semibold text-xs text-white">starciva@students.zhaw.ch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" overflow-hidden  relative  py-8 px-6 backdrop-blur-sm rounded-3xl shadow-2xl hover:bg-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 group">
        <div className="text-2xl font-semibold">Aleksandar Stojilkovic</div>
        <div className="text-lg text-gray-300">stojial1</div>
      <div className="img w-[120px] aspect-square overflow-hidden bg-gray-100 z-40 rounded-3xl">
        <img src="https://github.com/CapezOnMyBack.png" alt="profilepic" />
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <p className="font-semibold text-xs text-white">stojial1@students.zhaw.ch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" overflow-hidden  relative  py-8 px-6 backdrop-blur-sm rounded-3xl shadow-2xl hover:bg-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 group">
      <div className="text-2xl font-semibold">Juvan Thavalingam</div>
      <div className="text-lg text-gray-300">thavajuv</div>
      <div className="img w-[120px] aspect-square overflow-hidden bg-gray-100 z-40 rounded-3xl">
        <img src="https://github.com/CapezOnMyBack.png" alt="profilepic" />
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <p className="font-semibold text-xs text-white">thavajuv@students.zhaw.ch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" overflow-hidden  relative  py-8 px-6 backdrop-blur-sm rounded-3xl shadow-2xl hover:bg-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 group">
      <div className="text-2xl font-semibold">Alexis Tziantopoulos</div>
      <div className="text-lg text-gray-300">tzianale</div>
      <div className="img w-[120px] aspect-square overflow-hidden bg-gray-100 z-40 rounded-3xl">
        <img src="https://github.com/CapezOnMyBack.png" alt="profilepic" />
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <p className="font-semibold text-xs text-white">tzianale@students.zhaw.ch</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div className=" overflow-hidden  relative  py-8 px-6 ackdrop-blur-sm rounded-3xl shadow-2xl hover:bg-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 group">
      <div className="text-2xl font-semibold">Fabian Walter</div>
      <div className="text-lg text-gray-300">waltefab</div>
      <div className="img w-[120px] aspect-square overflow-hidden bg-gray-100 z-40 rounded-3xl">
        <img src="https://github.com/CapezOnMyBack.png" alt="profilepic" />
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
        <div className="flex flex-col items-start gap-1">
          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-3 items-center justify-center">
              <p className="font-semibold text-xs text-white">waltefab@students.zhaw.ch</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  );
};

export default Team;
