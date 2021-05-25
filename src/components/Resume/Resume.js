import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Araf_Rahman_Resume_Official.pdf";
import cv from "../../Assets/Araf_Rahman_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row><br/>
        <Row style={{ justifyContent: "center", position: "relative" }}> 
          <Button variant="primary" href={cv} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Dominion Energy - Software Intern"
              date="May 2021 - August 2021"
              content={[
                "Configured SAP Software development and Security principles, configuring roles, etc.",
                "Collaborated with software engineers to develop and test application procedures for system efficiency.",
              ]}
            />
            <Resumecontent
              title="Naval Information Warfare Center - Software Engineering Intern"
              date="June 2020 - October 2020"
              content={[
                "Participation in the Naval X project, configuration of DoD data by use of algorithms and dev techniques",
                "Developed script code for Naval webpages and construction of User Interface",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer - Freelance"
              content={[
                "Worked on creating many different websites for clients, varying from their personal business to creating tools for organizations.",
              ]}
            />
            <Resumecontent
              title="Hackathon Participant"
              content={[
                "Participated in numerous hackathons including Ramhacks, Bitcamp, HoyaHacks, etc. Most notably 2020 Ramhacks finished 3rd place for Carmax. ",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Virginia Commonwealth University"
              date="August 2018 - December 2021"
              content={[`Major: Computer Science`, 'Minor: Mathematics', `GPA: 3.9/4.0`, `Vice President of Pi Kappa Alpha Fraternity`]}
            />
            
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `3rd place in Ramhacks 2019`,
                "Deans list at VCU",
                `Finished 100+ problems on Leetcode`,
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
