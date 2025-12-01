import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme_context';
import { Toaster } from './components/ui/toaster';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import HeroSection from './components/sections/herosection';
import AboutSection from './components/sections/aboutsection';
import ProjectsSection from './components/sections/projectssection';
import BackgroundSection from './components/sections/backgroundsection';
import SkillsSection from './components/sections/skillsection';
import DownloadsSection from './components/sections/downloadsection';
import ContactSection from './components/sections/contactsection';
import './App.css';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BackgroundSection />
        <SkillsSection />
        <DownloadsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;