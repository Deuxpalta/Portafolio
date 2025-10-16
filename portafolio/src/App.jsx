import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import News from './pages/News';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}


export default App;