import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import TaskManagement from "../features/TaskManagement";
import CalenderMain from "../features/calender/CalenderMain";

function MainRoute() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={
              <div className="h-[400vh] flex flex-col">
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div> <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div> <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div> <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div> <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div> <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div> <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
                <div>Sample Content</div>
              </div>
            }
          />
          <Route path="tasks" element={<TaskManagement />} />
          <Route path="calendar" element={<CalenderMain />} />
          <Route path="*" element={<div>Will Launch Soon</div>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default MainRoute;
