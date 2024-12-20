import Tabs from "../components/Tabs";
import ApprovedTaskMain from "./approvedTask/ApprovedTaskMain";
import AssignedTaskMain from "./assignedTask/AssignedTaskMain";
import PendingApprovalMain from "./pendingApproval/PendingApprovalMain";

function TaskManagement() {
  const tabs = [
    {
      label: "To Do",
      content: <AssignedTaskMain />,
    },
    {
      label: "Pending Approval",
      content: <PendingApprovalMain />,
    },
    {
      label: "Approved",
      content: <ApprovedTaskMain />,
    },
  ];

  return (
    <div className="h-full bg-gray-50 flex justify-center">
      <div className="w-full">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default TaskManagement;
