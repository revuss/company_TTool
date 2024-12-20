import { ListCheck, Timer } from "lucide-react";
import Badge from "../../components/Badge";

interface TodoCardProps {
  projectName: string;
  priority: string;
  headLine: string;
  paragraph: string;
  completedTask: number;
  totalTask: number;
  moduleName: string;
  timeSpan: string;
}

function TodoCard({
  projectName,
  priority,
  headLine,
  paragraph,
  completedTask,
  totalTask,
  moduleName,
  timeSpan,
}: TodoCardProps) {
  const priorityColor =
    priority === "High"
      ? "bg-red-300 text-white"
      : priority === "Medium"
      ? "bg-yellow-300 text-white"
      : priority === "Low"
      ? "bg-indigo-300 text-white"
      : "";

  const progressPercentage = (completedTask / totalTask) * 100;

  return (
    <div className="max-w-sm cursor-pointer rounded-lg border bg-white shadow-lg p-4 space-y-4 hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <Badge label={projectName} className="bg-amber-100 text-amber-700" />
          <Badge
            label={moduleName}
            className="bg-green-200 text-gray-700 whitespace-nowrap text-xs"
          />
        </div>
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
            className="h-1.5 rounded-full bg-amber-600 bg-opacity-50 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <div className="flex space-x-2 items-center text-gray-500">
          <Timer /> <span className="text-xs">{timeSpan}</span>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
