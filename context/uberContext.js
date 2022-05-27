import { createContext, useState, useEffect } from 'react'

export const UberContext = createContext()

export const UberProvider = ({children}) => {


    return (
        <UberContext.Provider
          value={{
          }}
        >
          {children}
        </UberContext.Provider>
      )
}