import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import "../Styles/NavbarMenu.css"
import mainLogo from "../Images/main-logo.svg"

function NavbarMenu() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img alt="mainLogo" src={mainLogo} width="50" height="50" /> Notes
        </Navbar.Brand>
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
      </Container>
    </Navbar>
  )
}

export default NavbarMenu
