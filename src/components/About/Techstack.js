import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiSwift,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'rgb(3, 102, 252)',
    color: 'theme.palette.common.white',
    boxShadow: theme.shadows[1],
    fontSize: 22,
    zIndex: 99999,
    borderRadius: 15,
  },
}))(Tooltip);

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <LightTooltip title="C++">
        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
        </Col>
      </LightTooltip>
      <LightTooltip title="JavaScript">
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </LightTooltip>
      <LightTooltip title="NodeJS">
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </LightTooltip>
      <LightTooltip title="ReactJS">
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </LightTooltip>
      <LightTooltip title="MongoDB">
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </LightTooltip>
      <LightTooltip title="Python">
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </LightTooltip>
      <LightTooltip title="Java">
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </LightTooltip>
      <LightTooltip title="Swift">
        <Col xs={4} md={2} className="tech-icons">
          <DiSwift />
        </Col>
      </LightTooltip>
      <LightTooltip title="Github">
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </LightTooltip>
      <LightTooltip title="Firebase">
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </LightTooltip>
    </Row>
  );
}

export default Techstack;
