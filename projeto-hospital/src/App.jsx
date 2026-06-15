import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NevBar/index';
import Footer from './components/Footer/index';

import Home from './pages/Home/index';
import QuemSomos from './pages/QuemSomos/index';
import Servicos from './pages/Servicos/index';
import CorpoClinico from './pages/CorpoClinico/index';
import Blog from './pages/Blog/index';
import Contato from './pages/Contato/index';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/corpo-clinico" element={<CorpoClinico />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;