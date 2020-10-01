import React from 'react'
interface IProps {
  label: string
  id: string
  name: string
}
function RadioButton({ name, id, label }: IProps) {
  return (
    <div className='radio-wrapper'>
      <input id={id} type='radio' name={`radio-btn-${name}`} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

interface IA11yRadioProps {
  children: React.ReactNode
  legend?: string
}
const DUMMY_LEGEND = 'Select one of the options below'
function A11yRadio({ children, legend = DUMMY_LEGEND }: IA11yRadioProps) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

A11yRadio.RadioButton = RadioButton
export default A11yRadio
