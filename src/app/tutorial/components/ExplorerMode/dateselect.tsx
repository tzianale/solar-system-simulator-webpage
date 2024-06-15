const EXPdateselection: React.FC = () => {
    return (
      <div className="w-full max-w-screen-lg mx-auto my-8 px-8">
        <h2 className="text-2xl font-semibold mb-4">Date Selection</h2>
  
        <p className="mb-4">
            In the Explorer Mode, you can choose a specific date and time to see the constellation at that time. To do so, you need to click on the date and time display text in the upper left corner, which opens a new window.
        </p>
        <div className=" flex justify-center ">
          <img src="/dateselection.gif" alt="Next.js Logo" className="mb-4 w-9/12" />
        </div>
        <p className="mb-4">In the new opened window you can input your specific date and time:</p>
        <ol className="list-disc pl-6 mb-6">
                <li className="mb-2"><strong>Day:</strong> Dropdown field to choose the day.</li>
                <li className="mb-2"><strong>Month:</strong> Dropdown field to choose the month.</li>
                <li className="mb-2"><strong>Year:</strong> Input field to write the year.</li>
                <li className="mb-2"><strong>Hour:</strong> Dropdown field to write the hour.</li>
                <li className="mb-2"><strong>Minute:</strong> Dropdown field to write the minute.</li>
                <li className="mb-2"><strong>Second:</strong> Dropdown field to write the second.</li>
        </ol>
        <p className="mb-4">After filling out all the fields, press the  <span className=" bg-white text-slate-900 p-0.5 px-1.5 rounded-md shadow-lg font-bold ">Submit</span> button to change the date and time.</p>
      </div>
    );
  };
  
  export default EXPdateselection;
  