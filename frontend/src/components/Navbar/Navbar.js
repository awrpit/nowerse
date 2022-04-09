// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav, Button } from "react-bootstrap"

function NavBar() {
  const userInfo = localStorage.getItem("userInfo")
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontWeight: "800" }}> Nowerse </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {userInfo && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item style={{ fontWeight: "500" }}>
                  <Nav.Link href="/home"> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/compose" style={{ fontWeight: "500" }}>
                    Compose
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/logout" style={{ fontWeight: "500" }}>
                    Logout
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
