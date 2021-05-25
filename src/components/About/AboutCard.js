import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am currently a student at VCU majoring in Computer Science and Mathematics. I have one semester left and will graduate 
            in December 2021.
            <br /><br/>
            My love for developing interesting, cool, and modern application trumps all else. I am always learning and creating new things. 
            Innovations are what drives me and I am constantly discovering different ways to make our world faster and smarter.
            <br /><br/>
            These are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImArrowRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImArrowRight /> Exercising/Lifting Weights
            </li>
            <li className="about-activity">
              <ImArrowRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#86a0b5" }}>
          "Winners embrace hard work. They love the discipline of it, the trade-off they’re making to win. Losers, on the other hand, see it as punishment. And that’s the difference.
          "{" "}
          </p>
          <footer className="blockquote-footer">Lou Holtz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
