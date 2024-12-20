import Dropdown from "../../components/Dropdown";
import TodoCard from "./TodoCard";

function AssignedTaskMain() {
  const rangeOptions = [
    { id: "1", val: "High" },
    { id: "2", val: "Medium" },
    { id: "3", val: "Low" },
  ];
  return (
    <section>
      <div className="w-full flex justify-end pl-2 pb-2">
        <Dropdown
          labelStyle="w-[17vw]"
          showLabel={true}
          defaultValue="Select a Range"
          label="Range"
          onChange={(data) => console.log(data)}
          options={rangeOptions}
        />
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-2 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <TodoCard
            key={index}
            completedTask={2}
            totalTask={10}
            projectName="3 Lines"
            headLine="Wireframing"
            moduleName="Tickets"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            priority="High"
            timeSpan="2 Days ago"
          />
        ))}
      </div>
    </section>
  );
}

export default AssignedTaskMain;
