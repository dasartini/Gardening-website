import { useState, useEffect } from 'react';
import './App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ContactForm from '../components/ContactForm';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer)
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <Header />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
