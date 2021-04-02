import React from 'react'
import { remote } from 'electron'

import { Navbar, NavbarButtonBox } from '../../styles/includes/header'

const Header: React.FC = () => {
  return <>
    <Navbar className="titlebar">
      <span>TESTE APP</span>
      <NavbarButtonBox>
        <button onClick={() => remote.getCurrentWindow().minimize()}>_</button>
        <button onClick={() => remote.getCurrentWindow().close()}>X</button>
      </NavbarButtonBox>
    </Navbar>
  </>
}

export default Header
