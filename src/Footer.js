import React from 'react'

const Footer = ({items}) => {
  return (
    <footer>You have {items.length === 1 ? `${items.length} task` : items.length === 0 ? 'no task' : `${items.length} tasks`} to do</footer>
  )
}

export default Footer