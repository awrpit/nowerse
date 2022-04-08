// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

function NavBar() {
  return (
    <>
      {/* <NavLink to="home"> Home </NavLink>
      <NavLink to="users"> Users </NavLink>
      <NavLink to="blogs"> Blogs </NavLink> */}
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            {" "}
            <i class="fa-solid fa-scribble"></i> Nowerse{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="/home"> Home </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/compose"> Compose </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/compose"> Logout </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
