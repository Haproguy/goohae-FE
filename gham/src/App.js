import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminMain from "./pages/adminMain";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminMain />} />
      </Routes>
    </Router>
  );
}

export default App;
