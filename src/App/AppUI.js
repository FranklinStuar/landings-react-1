import React from 'react'
import { PageContext } from '../Context/PageContext'
import { GeneratorForm } from '../Admin/GeneratorForm'
import { Banner } from '../components/Banner'
import { AboutUs } from '../components/AboutUs'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { Faqs } from '../components/Faqs'

function AppUI () {
  const {page} = React.useContext(PageContext);
  return(
    <React.Fragment>
      <GeneratorForm/>
        <Banner
          title={page.banner.title}
          description={page.banner.description}
          largeImage={page.banner.image.large}
          smallImage={page.banner.image.small}
        />
        <AboutUs 
          aboutUsContent={page.aboutUs}
        />
        <Services 
          servicesList={page.services}
        />
        <Contact/>
        <Testimonials 
          testimonialsList={page.testimonials}
        />
        <Faqs
          faqsList={page.faqs}
        />
      <Footer/>
    </React.Fragment>
  )
}

export {AppUI}