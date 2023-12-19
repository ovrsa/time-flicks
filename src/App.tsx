import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Home from "./pages/home";
import Album from "./pages/album";
import Detail from "./pages/detail";
import AlbumCreate from "./pages/AlbumCreate";
import PhotoUpload from "./pages/PhotoUpload";
import Account from "./pages/Account";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="album/1" element={<Album />} />
        <Route path="album/create" element={<AlbumCreate />} />
        <Route path="album/1/detailsample" element={<Detail />} />
        <Route path="album/1/upload" element={<PhotoUpload />}></Route>
        <Route path="account" element={<Account />}></Route>
      </Routes>
    </Router>
  );
}