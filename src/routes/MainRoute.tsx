import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import TaskManagement from "../features/TaskManagement";

function MainRoute() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={<div className="h-[400vh]">Sample Content</div>}
          />
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="*" element={<div>Will Launch Soon</div>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default MainRoute;