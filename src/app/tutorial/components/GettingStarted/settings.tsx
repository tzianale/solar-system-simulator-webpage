const GSSettings: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <p className="mb-2">
        In this window, you can adjust the resolution and graphics settings. There are
        multiple graphic resolutions available, ranging from Low to High.
      </p>
      <div className=" flex justify-center ">
        <img src="/settings.png" alt="Next.js Logo" className="mb-4 w-9/12" />
      </div>
    </div>
  );
};

export default GSSettings;
