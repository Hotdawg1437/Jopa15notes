import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import "../Styles/NavbarMenu.css"
import mainLogo from "../Images/main-logo.svg"

function NavbarMenu() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Navbar expand="sm">
      <Container fluid>
        <img
          alt="mainLogo"
          src={mainLogo}
          width="50"
          height="50"
          className="main-logo"
        />
        <Navbar.Brand href="#home">Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Поиск"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <Button variant="0" onClick={handleShow} aria-current="notification-button"></Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Уведомления</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            ебаный задрот на сервере запрещено: использование читов, распрыжек,
            скриптов и прочих хитростей использование спреев-обманок и спреев с
            эротическим содержанием использование уязвимостей карт мат в любом
            проявлении слово "сука" хоть и литературное, но на сервере
            расценивается как мат оскорбления игроков использование нечитаемых
            ников, ников содежащие мат, цифровых ников всё это карается баном
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu
