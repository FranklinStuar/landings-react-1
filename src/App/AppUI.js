import React from 'react'
import { GeneratorForm } from '../Admin/GeneratorForm'
import { Banner } from '../components/Banner'
import { AboutUs } from '../components/AboutUs'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { Faqs } from '../components/Faqs'

function AppUI ({
  setPage,
  setName,
  setEmail,
  setTypeCompany,
  setDescription,
  setNameMessage,
  setEmailMessage,
  setDescriptionMessage,
  page,
  name,
  email,
  typeCompany,
  description,
  nameMessage,
  emailMessage,
  descriptionMessage
}) {
  return(
    <React.Fragment>
      <GeneratorForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        typeCompany={typeCompany}
        setTypeCompany={setTypeCompany}
        description={description}
        setDescription={setDescription}
      />
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
      <Contact
        nameMessage={nameMessage}
        setNameMessage={setNameMessage}
        emailMessage={emailMessage}
        setEmailMessage={setEmailMessage}
        descriptionMessage={descriptionMessage}
        setDescriptionMessage={setDescriptionMessage}
      />
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