import { MoveLeft, MoveRight } from "lucide-react";
import Button from "../../components/Button";

function CalendarMain() {
  return (
    <section className="h-full flex ">
      <div className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col h-[100%]">
        <section className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <span id="current-date" className="text-lg font-semibold">
              March 2022 / W9
            </span>
            <button
              id="prev-btn"
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <MoveLeft />
            </button>
            <button
              id="next-btn"
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <MoveRight />
            </button>
          </div>
          <Button label="Add Event" className="lg:w-[10vw]" />
        </section>

        <div className="flex flex-col flex-grow">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, idx) => (
                <div
                  key={idx}
                  className="text-center font-medium text-gray-600 flex items-center justify-center h-12"
                >
                  {day}
                </div>
              )
            )}
          </div>

          <div className="grid grid-cols-7 gap-2 flex-grow">
            {[1, 2, 3, 4, 5, 6, 7].map((day, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded p-2 flex items-center justify-center text-gray-700 h-full"
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarMain;
