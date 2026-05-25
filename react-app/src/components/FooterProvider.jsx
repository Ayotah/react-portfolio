import React from 'react'
import {createContext} from 'react'

export const FooterContext = createContext();
const FooterProvider = ({children}) => {

  return (  
    <FooterContext.Provider value={{}}>
      {children}
    </FooterContext.Provider>
  )
}


export default FooterProvider

