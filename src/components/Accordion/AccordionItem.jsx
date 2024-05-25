import React from 'react'

export default function AccordionItem({className, title,children}) {
  return (
    <li>
        <h3>{title}</h3>
        {children}
    </li>
  )
}
