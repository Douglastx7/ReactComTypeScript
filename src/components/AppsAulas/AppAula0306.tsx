import React from 'react'
import { UiContextProvider } from '../componentsAula0306/contexts/UiContext';
import Header from '../componentsAula0306/Header';
import Content from '../componentsAula0306/Content';

const AppAula0306 = () => {
  return (
        <UiContextProvider>
          <Header/>
          <Content/>
        </UiContextProvider>
  )
}

export default AppAula0306;