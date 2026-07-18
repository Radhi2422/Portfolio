
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import { CodeDashboard } from "./pages/Dashboard/CodeDashboard.jsx";
import ProblemPage from "./pages/Code Editor/ProblemPage.jsx";
import DataStructurepage from "./pages/DSA/DataStructurepage.jsx";
import MyProjectsTypesPage from "./pages/Projects/MyProjectsTypesPage.jsx";
import MyExperience from "./pages/Experience/MyExperience.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Coding platform addition */}
        <Route path="/codedashboard" element={<CodeDashboard/>}/>
        <Route path="/problems" element={<ProblemPage />} />
        {/* DSA */}
        <Route path="/dsa" element={<DataStructurepage/>}/>
        {/* MyProjects */}
        <Route path="/my-projects" element={<MyProjectsTypesPage/>}/>
        {/* My Experiences */}
        <Route path="/my-experiences" element={<MyExperience/>}/>
    </Routes>
    </BrowserRouter>



  );
}

export default App;