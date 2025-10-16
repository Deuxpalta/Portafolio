import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import News from './pages/News';
import AboutMe from './pages/AboutMe';


function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/news" element={<News />} />
       <Route path="/about-me" element={<AboutMe />} />
     </Routes>
   </>
 );
}


export default App;