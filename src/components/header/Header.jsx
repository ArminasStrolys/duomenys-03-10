import React from 'react'
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    Expenses app
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                BIT React training
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
