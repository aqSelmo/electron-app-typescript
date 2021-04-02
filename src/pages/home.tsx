import React from 'react'
import { Container, Menu } from '../styles/home'
import Header from './includes/header'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Menu>
          <p>Menu</p>
        </Menu>
      </Container>
    </>
  )
}

export default Home
