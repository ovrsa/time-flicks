import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/ui/Home';
import Login from './pages/login';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}