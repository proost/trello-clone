import React from 'react'

export function EmailForm(props) {
  return (
    <div class="form-group">
      <label for="InputEmail">{props.labelName}</label>
      <input
        value={props.value}
        type="email" 
        class="form-control" 
        id="InputEmail"
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}/>
    </div> 
  )
}

export function PasswordForm(props) {
  return (
    <div class="form-group">
      <label for="InputPassword">{props.labelName}</label>
      <input
        value={props.value}
        type="password" 
        class="form-control" 
        id="InputPassword"
        onChange={props.handleChange}
        required /> 
    </div>
  )
}

export function ReadonlyForm(props) {
  return (
    <div class="form-group">
      <label for="InputReadonly">{props.labelName}</label>
      <input 
        type="text" 
        class="form-control-plaintext" 
        value={props.value} 
        id="InputReadonly"
        readonly/>
    </div>
  )
}

export function FileUploadForm(props) {
  return (
    <div class="form-group">
      <label for="InputFile">{props.labelName}</label>
      <input 
        type="file"
        accept={props.fileType}
        class="form-control-file" 
        id="InputFile"/>
    </div>
  )
}

export function InputTextForm(props) {
  return (
    <div class="form-group">
      <label for="InputText">{props.labelName}</label>
      <input 
        class="form-control" 
        type="text"
        id="InputText"
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}/>
    </div>
  )
} 