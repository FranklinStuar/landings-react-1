import React from 'react';
import {Input, TextArea, Submit} from "./../Form"

function GeneratorForm(){
  return(
    <div className='container'>
      <form className='form' action="/">
        <Input name="name" label="Name of Company"/>
        <Input name="type-company" label="Type of company"/>
        <TextArea name="description" label="Simple description of Company"/>
        <Submit/>

      </form>
    </div>
  )
}

export {GeneratorForm}