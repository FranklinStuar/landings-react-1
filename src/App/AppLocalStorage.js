import React from 'react'

function useLocalStorage(itemName,initialValue){
  const [item,setItem] = React.useState(initialValue)
  React.useEffect(() => {
    setTimeout(() => {
      // get content solved
      let localStorageItem = localStorage.getItem(itemName)
      let parseItem = []
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parseItem = initialValue
      }
      else
        parseItem = JSON.parse(localStorageItem)
      setItem(parseItem)
    }, 1000);
  })

  // set content
  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item,saveItem]
  
}

export {useLocalStorage}