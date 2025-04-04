import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Added BrowserRouter
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

export default function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <BrowserRouter> {/* Wrap entire app with BrowserRouter */}
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}