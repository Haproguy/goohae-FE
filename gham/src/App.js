import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminMain from "./pages/adminMain";
import AdminLogin from "./pages/adminLogin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminMain />} />
        <Route path="/adLogin" element={ <AdminLogin />}/>
      </Routes>
    </Router>
  );
}

export default App;
