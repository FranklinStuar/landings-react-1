import React from 'react';
import {InputForm, TextAreaForm, Submit} from "./../Form"
import { AdminContext } from '../../Context/AdminContext'

function GeneratorForm(){
  const {name, setName, email, setEmail, typeCompany, setTypeCompany, description, setDescription, onSubmitForm} = React.useContext(AdminContext);
  return(
    <div className='container'>
      <form className='form' action="/" onSubmit={onSubmitForm}>
        <InputForm name="name" label="Name of Company" value={name} setValue={setName}/>
        <InputForm name="type-company" label="Type of company" value={email} setValue={setEmail}/>
        <InputForm name="email-company" label="Email" type="email" value={typeCompany} setValue={setTypeCompany}/>
        <TextAreaForm name="description" label="Simple description of Company" value={description} setValue={setDescription}/>
        <Submit/>

      </form>
    </div>
  )
}

export {GeneratorForm}