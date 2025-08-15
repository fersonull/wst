import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/Layouts/MainLayout";
import Overview from "./Pages/Overview";
import Topics from "./Pages/Topics";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
