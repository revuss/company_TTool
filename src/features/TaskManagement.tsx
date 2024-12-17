import React from "react";
import Tabs from "../components/Tabs";
import AssignedTaskMain from "./assignedTask/AssignedTaskMain";

const TaskManagement: React.FC = () => {
  const tabs = [
    {
      label: "To Do",
      content: <AssignedTaskMain />,
    },
    {
      label: "Completed",
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-2">Completed Tasks</h2>
          <p>Tasks that are completed and need approval.</p>
        </div>
      ),
    },
    {
      label: "Approved",
      content: (
        <div>
          <h2 className="text-lg font-semibold mb-2">Approved Tasks</h2>
          <p>Tasks that are completed and approved.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full bg-gray-50 flex justify-center">
      <div className="w-full">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default TaskManagement;
