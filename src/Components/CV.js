import React from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import { GrCloudDownload } from "react-icons/gr";
import cv from "../Assets/Omayma-Ahmad-Resume.pdf";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function CV() {
  return (
    <>
      <body>
        <Jumbotron fluid>
          <Container className="cvContainer">
            <h1>CV & other links</h1>
            <p>For any further information use the buttons below.</p>
            <p>
              <Button variant="secondary">
                <GrCloudDownload />{" "}
                <a href={cv} download>
                  Download CV
                </a>
              </Button>
            </p>
            <br></br>
            <p>
              <Button variant="info">
                <AiFillLinkedin />{" "}
                <a href="https://www.linkedin.com/in/omayma-ahmad-14922a1b8/">
                  LinkedIn
                </a>
              </Button>
            </p>
            <br></br>
            <p>
              <Button variant="info">
                <AiFillGithub />{" "}
                <a href="https://github.com/omaymaahmad">
                  GitHub
                </a>
              </Button>
            </p>
          </Container>
        </Jumbotron>
      </body>
    </>
  );
}

export default CV;
