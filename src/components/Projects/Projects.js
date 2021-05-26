import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import store from "../../Assets/onlinestore.png";
import codeva from "../../Assets/codeva.png";
import myweb from "../../Assets/myweb.png";
import holes from "../../Assets/holes.png";
import cq from "../../Assets/cq.png";
import shop from "../../Assets/shop.png";
import quiz from "../../Assets/quiz.png";
import kids from "../../Assets/kidsgame.png";
import mm from "../../Assets/mm.png";
import gpa from "../../Assets/gpa.png";
import balloon from "../../Assets/balloon.png";
import matching from "../../Assets/matching.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Web Development</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Online Store"
              description="Online Store build with react.js, Material-UI, and Firebase. Has features which allows REAL stripe payments, full account functionality, and can review previous orders. 
              You can add items to cart and make orders that will save to the databse and unique to each account. It is a full stack application and can be turned into a real store."
              link="https://online-store-9dc9d.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeva}
              isBlog={false}
              title="Stock Market Learning Tool"
              description="Sanctioned by CodeVa and the Virginia Department of Education, this is a ten-module online course centered around the stock-market/securities exchange and machine learning. The objective is to teach students
              how to make educated decisions about the stock market using modern machine learning and computational analysis. Created using MongoDB, Express, ReactJS, Redux, and NodeJS."
              link="https://github.com/arafrahman5138/VCU-Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myweb}
              isBlog={false}
              title="Personal Portfolio"
              description="This very tool was created to show my portfolio and talents. I created it using React, Bootstrap, and many other libraries such as Material UI and Vanilla."
              link="https://arafrahman5138.github.io/"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          <strong className="purple">App Development</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={holes}
              isBlog={false}
              title="Holes"
              description="Mini-Golf phone app created using React-Native. App allows to keep track of scores with multiple users allowing interactive functionality. App uses basic navigation stacks with dynamic UI allowing a slick interactive User Interface."
              link="https://snack.expo.io/@arafrahman/github.com-trivedism-holes475"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cq}
              isBlog={false}
              title="CourseQuest"
              description=""
              link="https://drive.google.com/file/d/1RWxHHx0IOoIHKYaZrLbS_DoWFrWjWm6Y/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shopping Cart"
              description=""
              link="https://drive.google.com/file/d/1LA3ZebfuvcvKwfGXjGuH2NvWPwmA8r_w/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpa}
              isBlog={false}
              title="GPA Calculator"
              description=""
              link="https://drive.google.com/file/d/11RdQRwjt1BWGzI4pc2ECJstRkDmCfwwe/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Game"
              description=""
              link="https://drive.google.com/file/d/1Dxl7mDX4GmdiV0wBI5ZbpiHKXSPQPAv4/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mm}
              isBlog={false}
              title="Maze-Man"
              description=""
              link="https://drive.google.com/file/d/1ujSnxansrLf8gJjDqmZmI6vfq38xTH3q/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kids}
              isBlog={false}
              title="Memory Game"
              description=""
              link="https://drive.google.com/file/d/1Bx3sOY0bp25YXY1TmhYKEIfSxqFKWlk-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matching}
              isBlog={false}
              title="Matching Game"
              description=""
              link="https://drive.google.com/file/d/1Bx3sOY0bp25YXY1TmhYKEIfSxqFKWlk-/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={balloon}
              isBlog={false}
              title="Balloon Pop Game"
              description=""
              link="https://drive.google.com/file/d/1Bx3sOY0bp25YXY1TmhYKEIfSxqFKWlk-/view?usp=sharing"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          <strong className="purple">Algorithms/Java Projects</strong>
        </h1>
        
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
