import React from 'react'
import { Banner } from './../components/Banner'
import { Phrase } from './../components/Phrase'
import { Services } from './../components/Services'
import { Contact } from './../components/Contact'
import { Testimonials } from './../components/Testimonials'
import { Footer } from './../components/Footer'


function App() {
  return (
    <>
      <Banner/>
      <Phrase/>
      <Services/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
