import React from 'react'
import { AppUI } from './AppUI'
import { AppProvider } from './AppContext'

import "./../css/style.css"
import "./../css/style.sass.css"


function App() {

  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;
