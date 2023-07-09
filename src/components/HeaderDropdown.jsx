import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

function HeaderDropdown({info, name}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {info[name].title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {info[name].items.map(item =>  <Dropdown.Item href={info[name].link + item}>{item}</Dropdown.Item> )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default HeaderDropdown