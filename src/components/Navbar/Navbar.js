import React, { PropTypes as T } from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css';
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

export class Bar extends React.Component {
  render() {
    return (
      <div>
        <Nav bsClass='Nav' bsStyle='pills' activeKey={1} >
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/about">About</NavItem>
          <NavItem eventKey={3} disabled>Some other things</NavItem>
        </Nav>
      </div>
    )
  }
}

export default Bar
