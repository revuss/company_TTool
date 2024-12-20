import Badge from "../../components/Badge";

function PendingApprovalMain() {
  return (
    <div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Project Name</th>
              <th className="py-3 px-4">Assigned To</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Module</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Assigned on</th>
              <th className="py-3 px-4">Submitted on</th>
              <th className="py-3 px-4">View</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 border-b">
              <td className="py-3 px-4 text-blue-500">DC-T535</td>
              <td className="py-3 px-4">Artistic Alchemy</td>
              <td className="py-3 px-4">Alexe Jordan</td>
              <td className="py-3 px-4">Billable</td>
              <td className="py-3 px-4">
                <Badge label="Approved" className="bg-green-300 text-white" />
              </td>
              <td className="py-3 px-4">09:23 - 12:23</td>
              <td className="py-3 px-4">12:34:23</td>
              <td className="py-3 px-4">
                <button className="text-gray-500 hover:text-gray-700">
                  View
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 border-b">
              <td className="py-3 px-4 text-blue-500">DC-T345</td>
              <td className="py-3 px-4">Visual Vortex</td>
              <td className="py-3 px-4">Kate Tanner</td>
              <td className="py-3 px-4">Non Billable</td>
              <td className="py-3 px-4">
                <Badge label="Pending" />
              </td>
              <td className="py-3 px-4">12:32 - 06:55</td>
              <td className="py-3 px-4">06:26:34</td>
              <td className="py-3 px-4">
                <button className="text-gray-500 hover:text-gray-700">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingApprovalMain;
