import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Layouts/MainLayout";
import Overview from "./Pages/Overview";
import Topics from "./Pages/Topics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/topics" element={<Topics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
