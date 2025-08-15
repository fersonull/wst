import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Layouts/MainLayout";
import Overview from "./Pages/Overview";
import Topics from "./Pages/Topics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/wst/" element={<Overview />} />
          <Route path="/wst/topics" element={<Topics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
