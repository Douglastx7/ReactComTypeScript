import React from 'react'
import Header from '../componentsAula0306/Header';
import Content from '../componentsAula0306/Content';
import { UserContextProvider } from '../componentsAula0306/contexts/UserContext';

const AppAula0306 = () => {
  return (
        <div>
          <UserContextProvider>
            <Header/>
            <Content/>
          </UserContextProvider>
        </div>
  )
}

export default AppAula0306;