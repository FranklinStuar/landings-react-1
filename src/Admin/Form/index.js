import React from 'react';

function InputForm({label,name, type="text", value, setValue}){
  const onChangeInput = (e) =>{
    setValue(e.target.value)
  }
  return (
      <div className='group-form'>
        <label className="label-form" htmlFor={"form-input-"+name}>{label}</label>
        <input 
          className='input-form' 
          type={type} 
          id={"form-input-"+name} 
          name={name} 
          placeholder={label}
          value={value}
          onChange={onChangeInput}
        />
      </div>
  );
}

function TextAreaForm({label,name, value, setValue}){
  const onChangeInput = (e) =>{
    setValue(e.target.value)
  }
  return (
    <div className='group-form'>
      <label className="label-form" htmlFor={"form-textarea-"+name}>{label}</label>
      <textarea 
        className='input-form textarea-form'  
        name={name} 
        id={"form-textarea-"+name} 
        rows="5" 
        placeholder={label}
        onChange={onChangeInput}
        value={value}
        >
        </textarea>
    </div>
  );
}
function Submit({label="Send"}){
  return (
    <div className='submit-container-form'>
      <input className='submit-form' type="submit" value={label} />
    </div>
  );
}

export {InputForm, TextAreaForm, Submit}