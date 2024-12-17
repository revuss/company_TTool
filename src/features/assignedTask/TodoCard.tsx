import { ListCheck } from "lucide-react";
import Badge from "../../components/Badge";
import Button from "../../components/Button";

interface TodoCardProps {
  projectName: string;
  priority: string;
  headLine: string;
  paragraph: string;
  completedTask: number;
  totalTask: number;
  moduleName: string;
  buttonName: string;
}

function TodoCard({
  projectName,
  priority,
  headLine,
  paragraph,
  completedTask,
  totalTask,
  moduleName,
  buttonName,
}: TodoCardProps) {
  // Determine badge color based on priority
  const priorityColor =
    priority === "High"
      ? "bg-red-500 text-white"
      : priority === "Medium"
      ? "bg-yellow-400 text-white"
      : priority === "Low"
      ? "bg-blue-500 text-white"
      : "";

  const progressPercentage = (completedTask / totalTask) * 100;

  return (
    <div className="max-w-sm rounded-lg border bg-white shadow-lg p-4 space-y-4 hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300">
      <div className="flex justify-between items-center">
        <Badge label={projectName} className="bg-amber-100 text-amber-700" />
        <Badge
          label={priority}
          className={`rounded-full px-2 py-1 text-xs font-semibold ${priorityColor}`}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">{headLine}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {paragraph}
        </p>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center space-x-1">
            <ListCheck className="w-4 h-4" />
            <span className="text-sm font-medium">
              {completedTask}/{totalTask} Tasks
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-green-600 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <Badge
          label={moduleName}
          className="bg-green-200 text-gray-700 whitespace-nowrap text-xs"
        />
        <Button
          label={buttonName}
          className="w-[30%] transition-colors duration-300"
        />
      </div>
    </div>
  );
}

export default TodoCard;
