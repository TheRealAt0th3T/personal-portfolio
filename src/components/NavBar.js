import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import linkedinLogo from "../assets/images/linkedin.png";
import githubLogo from "../assets/images/github.png";
import mainLogo from "../assets/images/ElmoFire.png";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scroll, setScroll] = useState(false);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Navbar expand="md" className={scroll ? "scroll" : ""}>
        <Container>
          <Navbar.Brand href="home">
            <img className="main-logo" src={mainLogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="socials-icon">
                <a href="https://www.linkedin.com/in/amaratariq/">
                  <img src={linkedinLogo} alt="" />
                </a>
                <a href="https://github.com/TheRealAt0th3T">
                  <img src={githubLogo} alt="" />
                </a>
              </div>
              {/* <button
                className="contact-me"
                onClick={() => console.log("connect-me")}
              >
                <span>Connect with me!</span>
              </button> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
};
