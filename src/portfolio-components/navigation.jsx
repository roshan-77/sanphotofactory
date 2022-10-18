import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png"
export function Navigation() {
  return (
    <Navbar expand="lg" style={{position:"absolute", zIndex:"1", left:0, right:0, backgroundColor:"rgba(0,0,0,0.3)"}}>
      <Container style={{width:"auto", padding:"0 10px"}} className="containers">
        <Navbar.Brand href="#home" style={{fontSize:"25px", color:"white", paddingRight:"25px"}}><span style={{paddingRight:"15px"}}>SanPhoto</span><img src={logo} alt="" style={{width:"40px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{display:"flex", fontSize:"20px"}}>
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>About Me</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Portfolio</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}