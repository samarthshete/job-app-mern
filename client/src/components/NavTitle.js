import React from 'react'
import Wrapper from '../assets/wrappers/JobInfo'
export default function NavTitle({icon, text}) {
   
  return (
    <Wrapper>
     {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </Wrapper>
  )
}
