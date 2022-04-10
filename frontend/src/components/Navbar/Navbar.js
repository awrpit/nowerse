import { Navbar, Container, Nav } from "react-bootstrap"
import { FaAngleUp } from "react-icons/fa"
import { IoHome } from "react-icons/io5"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
function NavBar() {
  const userInfo = localStorage.getItem("userInfo")
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontWeight: "800" }}>
            {" "}
            <FaAngleUp /> Nowerse{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {userInfo && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item style={{ fontWeight: "500" }}>
                  <Nav.Link href="/home">
                    <IoHome size={24} /> Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/compose" style={{ fontWeight: "500" }}>
                    <HiOutlinePencilAlt size={25} /> Compose
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/logout" style={{ fontWeight: "500" }}>
                    <FiLogOut size={25} /> Logout
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
