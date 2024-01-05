import React from 'react'
import Button from './Button'

function ButtonList() {
  var btnList=['All','Mix','Cricket','Football','JavaScript','React','Gaming','Live','Music']
  return (
    <>
   {
    btnList.map((btn)=>(
      <Button name={btn}/>
    ))
   }
   </>
  )
}

export default ButtonList