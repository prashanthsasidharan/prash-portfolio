import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Blogs from './Blogs/Blogs';
import Layout from './Layout/Layout';

import { PortfolioProvider } from '../context/context';

import {
  navbarData,
  heroData,
  aboutData,
  projectsData,
  skillsData,
  contactData,
  footerData,
  blogsData,
} from '../mock/data';

function App() {
  const [navbar, setNavbarData] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavbarData({ ...navbarData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setSkills([...skillsData]);
    setBlogs([...blogsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ navbar, hero, about, projects, skills, blogs, contact, footer }}>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
        <Footer />
      </Layout>
    </PortfolioProvider>
  );
}

export default App;
