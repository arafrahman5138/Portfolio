import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillSlackCircle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from './Type'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My Name is <span className="purple"> Araf Rahman </span> 
            </h1>
            <p className="home-about-body">
              I fell in love with programming at a young age, and now I am making it my profession.
              <br />
              <br />My expertise is in object-oriented programming like
              <i>
                <b className="purple"> Java, C++ and Python </b>
              </i>
              <br />
              <br />
              My interest is now building &nbsp;
              <i>
                <b className="purple">Full Stack Applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  Software Engineering
                </b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <Type/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">CONNECT WITH ME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arafrahman5138"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://app.slack.com/client/T1G73MDN3/G01P1BYA44W/user_profile/UCT9V14JX"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillSlackCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/araf-rahman-8778b5177/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
