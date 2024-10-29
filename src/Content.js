import React from 'react'
import ItemList from './ItemList';


const Content = ({items,handleCheck,handleDelete}) => {
  
  return (
    <>
      {(items.length) ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        ) 
        : (<p>Use the above Input box to add items</p>)
      }
        
    </>
  )
}

export default Content