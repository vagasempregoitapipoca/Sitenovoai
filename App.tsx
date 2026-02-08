import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { JobDetails } from './pages/JobDetails';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vaga/:id" element={<JobDetails />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
};

export default App;
