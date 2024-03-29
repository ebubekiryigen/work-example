"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'

function Provider({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Provider