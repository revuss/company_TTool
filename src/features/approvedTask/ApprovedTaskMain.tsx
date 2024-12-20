import Badge from "../../components/Badge";

function ApprovedTaskMain() {
  return (
    <div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Project Name</th>
              <th className="py-3 px-4">Module</th>
              <th className="py-3 px-4">Approved by</th>
              <th className="py-3 px-4">Approved on</th>
              <th className="py-3 px-4">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 border-b">
              <td className="py-3 px-4 text-blue-500">DC-T535</td>
              <td className="py-3 flex text-center justify-start items-center">
                <Badge label="Approved" className="bg-green-400 text-white" />
              </td>
              <td className="py-3 px-4">Artistic Alchemy</td>
              <td className="py-3 px-4">Alexe Jordan</td>
              <td className="py-3 px-4">Billable</td>
            </tr>

            <tr className="hover:bg-gray-50 border-b">
              <td className="py-3 px-4 text-blue-500">DC-T535</td>
              <td className="py-3 flex text-center justify-start items-center">
                <Badge label="Approved" className="bg-green-400 text-white" />
              </td>
              <td className="py-3 px-4">Artistic Alchemy</td>
              <td className="py-3 px-4">Alexe Jordan</td>
              <td className="py-3 px-4">Billable</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApprovedTaskMain;
