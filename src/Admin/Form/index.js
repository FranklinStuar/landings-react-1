import React from 'react';

function Input({label,name, type="text"}){
  return (
      <div className='group-form'>
        <label className="label-form" htmlFor={"form-input-"+name}>{label}</label>
        <input className='input-form' type={type} id={"form-input-"+name} name={name} placeholder={label}/>
      </div>
  );
}

function TextArea({label,name}){
  return (
    <div className='group-form'>
      <label className="label-form" htmlFor={"form-textarea-"+name}>{label}</label>
      <textarea className='input-form textarea-form'  name={name} id={"form-textarea-"+name} cols="5" placeholder={label}></textarea>
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

export {Input, TextArea, Submit}