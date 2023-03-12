import React from 'react'
import { AppUI } from './AppUI'
import { PageProvider } from '../Context/PageContext'
import { AdminProvider } from '../Context/AdminContext'

import "./../css/style.css"
import "./../css/style.sass.css"


function App() {

  return (
    <>
    <PageProvider>
      <AdminProvider>
        <AppUI />
      </AdminProvider>
    </PageProvider>
    </>
  );
}

export default App;
