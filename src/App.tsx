import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}