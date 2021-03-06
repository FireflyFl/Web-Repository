import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero';
import Recommend from './components/Recommend'
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar'


export default function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <Recommend />
        <ScrollToTop />
        <Services />
        <Testimonials />
        <Footer />
      </>
    );
}