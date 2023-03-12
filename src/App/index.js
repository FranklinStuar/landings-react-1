import React from 'react'
import { AppUI } from './AppUI'

import "./../css/style.css"
import "./../css/style.sass.css"

const defaultPage = {
  banner: {
    title: "Mantenimiento de Automóviles de Primera Clase",
    description: "Descubre cómo nuestro servicio de mecánica especializada puede ayudarte a mantener tu vehículo en su mejor estado",
    image: {
      large: "./img/banner.webp",
      small: "./img/banner.webp",
    }
  },
  faqs: [
    {
      question: "¿Qué tipo de autos reparan en la mecánica?", 
      answer: "En nuestra mecánica especializada en la reparación de autos de alta gama y de lujo. Trabajamos con marcas de prestigio y alta calidad."
    },
    {
      question: "¿Cuál es el tiempo de reparación promedio?", 
      answer: "El tiempo de reparación depende del tipo de servicio y del modelo de tu auto, pero nuestro equipo de expertos se asegura de que todas las reparaciones se realicen con rapidez y eficacia sin sacrificar la calidad."
    },
    {
      question: "¿Cuánto cuesta una reparación en la mecánica?", 
      answer: "El costo de las reparaciones depende del tipo de servicio y del modelo de tu auto, pero siempre te proporcionaremos un presupuesto claro y detallado antes de iniciar cualquier trabajo."
    },
    {
      question: "¿Ofrecen algún tipo de garantía en las reparaciones?", 
      answer: "Sí, ofrecemos una garantía en todas nuestras reparaciones, asegurándote que el trabajo se realiza de manera correcta y con los mejores estándares de calidad."
    },
    {
      question: "¿Cómo puedo reservar una cita para reparar mi auto?", 
      answer: "Puedes reservar una cita a través de nuestra página web, por correo electrónico o por teléfono. Nuestro equipo se asegurará de agendar una fecha y hora que sea conveniente para ti."
    },
    {
      question: "¿Cuál es la experiencia de su equipo de mecánicos?", 
      answer: "Nuestro equipo de mecánicos cuenta con años de experiencia y están altamente capacitados y certificados para trabajar en autos de alta gama y lujo. También participan en formación continua para estar al día con las últimas tecnologías y técnicas."
    },
    {
      question: "¿Tienen servicio de asistencia en carretera?", 
      answer: "Sí, ofrecemos servicio de asistencia en carretera las 24 horas del día para nuestros clientes. Simplemente llámanos y te enviaremos la ayuda que necesites."
    }
  ],
  aboutUs: "Cada servicio que ofrecemos es una oportunidad para demostrar nuestra excelencia y liderazgo. Nos enorgullece ser innovadores y pioneros en el mundo de la reparación automotriz, utilizando la última tecnología y técnicas avanzadas para superar las expectativas de nuestros clientes. ",
  services: [
    {img:'./img/1.webp', title:"Mantenimiento Preventivo", description:'Mantén tu vehículo de lujo en óptimas condiciones con nuestro servicio de mantenimiento de alta calidad que te garantiza la tranquilidad de saber que tu inversión está en las mejores manos.'},
    {img:'./img/2.webp', title:"Reparación de Motor", description:'Restaura la potencia y rendimiento de tu vehículo de lujo con nuestro servicio de reparación de motores realizado por técnicos altamente capacitados y con experiencia en autos de alta gama.'},
    {img:'./img/3.webp', title:"Alineación y Balanceo", description:'Asegura la estabilidad y manejo de tu vehículo de lujo con nuestro servicio de alineación y balanceo, donde nos enfocamos en detalles precisos y utilizamos equipos de última generación.'},
    {img:'./img/4.webp', title:"Cambio de Aceite", description:'Extiende la vida útil del motor de tu vehículo de lujo con nuestro servicio de cambio de aceite premium, realizado con productos de la más alta calidad y con la atención personalizada que mereces.'}
  ],
  testimonials: [
    {name:'María González', profession:"Gerente", comment:'La atención al cliente en esta mecánica es excepcional. Desde que llegué, me sentí en confianza con el equipo de mecánicos. Definitivamente regresaré.'},
    {name:'Juan Pérez', profession:"Abogado", comment:'El trabajo que realizaron en mi auto fue impresionante. No solo solucionaron el problema, sino que me explicaron todo el proceso de reparación. Recomendaré esta mecánica a todos mis amigos.'},
    {name:'Ana Torres', profession:"Dueño de tiena", comment:'Me encantó el trato personalizado que recibí en esta mecánica. Fueron muy detallistas en la inspección de mi auto y me informaron de todo lo que necesitaba ser reparado. Gracias a ellos mi auto está como nuevo.'}
  ]

}

function useLocalStorage(itemName,initialValue){
  const [item,setItem] = React.useState(initialValue)
  React.useEffect(() => {
    setTimeout(() => {
      // get content solved
      let localStorageItem = localStorage.getItem(itemName)
      let parseItem = []
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parseItem = initialValue
      }
      else
        parseItem = JSON.parse(localStorageItem)
      setItem(parseItem)
    }, 1000);
  })

  // set content
  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item,saveItem]
  
}

function App() {

  const [page, setPage] = useLocalStorage("automatic_page",defaultPage)
  
  // Form to create an automatic page
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [typeCompany,setTypeCompany] = React.useState("")
  const [description,setDescription] = React.useState("")
  // Form to send Message
  const [nameMessage,setNameMessage] = React.useState("")
  const [emailMessage,setEmailMessage] = React.useState("")
  const [descriptionMessage,setDescriptionMessage] = React.useState("")

  return (
    <AppUI 
    setName={setName}
    setEmail={setEmail}
    setTypeCompany={setTypeCompany}
    setDescription={setDescription}
    setNameMessage={setNameMessage}
    setEmailMessage={setEmailMessage}
    setDescriptionMessage={setDescriptionMessage}
    page={page}
    name={name}
    email={email}
    typeCompany={typeCompany}
    description={description}
    nameMessage={nameMessage}
    emailMessage={emailMessage}
    descriptionMessage={descriptionMessage}
    />
  );
}

export default App;
