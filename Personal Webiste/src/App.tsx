import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ProjectsPage, BlogPage, ContactPage } from './pages';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/hakkimda" element={<AboutPage isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/projeler" element={<ProjectsPage isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/blog" element={<BlogPage isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/iletisim" element={<ContactPage isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </Router>
  );
}

export default App;
