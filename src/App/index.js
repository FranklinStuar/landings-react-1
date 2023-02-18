import React from 'react'
import { Banner } from './../components/Banner'
import { Phrase } from './../components/Phrase'
import { Services } from './../components/Services'
import { Contact } from './../components/Contact'
import { Testimonials } from './../components/Testimonials'
import { Footer } from './../components/Footer'
import { Faqs } from './../components/Faqs'
import "./../css/style.css"
import "./../css/style.sass.css"
function App() {
  return (
    <>
      <Banner/>
      <Phrase/>
      <Services/>
      <Contact/>
      <Testimonials/>
      <Faqs/>
      <Footer/>
    </>
  );
}

export default App;
