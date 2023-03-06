import { Container } from '@mui/material';
import React from 'react'
import "./header.css";

function Header() {

  return (
    <header className="header">
        <Container>
        <nav className='nav'>
            <div className='left'>
                <a>Redphantom</a>
            </div>
            <div className='right'>
                <a href="">What we do</a>
                <a href="">Who we are</a>
                <a href=""> Career</a>
                <a href="">Contact</a>
                <a href="">Search</a>
            </div>
        </nav>
        </Container>
  </header>
  )
}

export default Header