import React from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import { MdCloudDownload } from "react-icons/md";
import cv from "../Assets/Omayma-Ahmad-Resume.pdf";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./CV.css";

function CV() {
  return (
    <>
      <body >
        <Jumbotron fluid>
          <Container className="cvContainer">
            <h1>CV & other links</h1>
            <p>For any further information use the buttons below.</p>
            <p>
              <Button variant="secondary">
                <MdCloudDownload />{" "}
                <a href={cv} download>
                  Download CV
                </a>
              </Button>
            </p>
            <br></br>
            <p>
              <Button variant="secondary">
                <AiFillLinkedin />{" "}
                <a href="https://www.linkedin.com/in/omayma-ahmad-14922a1b8/">
                  LinkedIn
                </a>
              </Button>
            </p>
            <br></br>
            <p>
              <Button variant="secondary">
                <AiFillGithub />{" "}
                <a href="https://github.com/omaymaahmad">
                  GitHub
                </a>
              </Button>
            </p>
            <br></br>
            <p>
              <Button variant="secondary">
                <MdEmail />{" "}
                <a href="mailto:omayma.ahmad25@gmail.com">
                  Email
                </a>
              </Button>
            </p>
            <br></br>
          </Container>
        </Jumbotron>
      </body>
    </>
  );
}

export default CV;
