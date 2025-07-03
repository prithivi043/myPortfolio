import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe';
import Ido from './components/Ido';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import EducationJourney from './components/EducationJourney';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import { Helmet } from "react-helmet";

function App() {

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Prithivi Raj Portfolio",
              "url": "https://your-domain.com",
              "description": "Portfolio of Prithivi Raj – a B.Tech CSBS student and full stack developer skilled in React, MongoDB, Express, and Tailwind CSS.",
              "author": {
                "@type": "Person",
                "name": "Prithivi Raj"
              }
            }
        `}
        </script>
      </Helmet>

      <Navbar />
      <Home />
      <AboutMe />
      <Ido />
      <Projects />
      <Achievements />
      <EducationJourney />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
