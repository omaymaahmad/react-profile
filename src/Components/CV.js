import React from 'react';
import { Button } from 'react-bootstrap';
import { GrCloudDownload } from 'react-icons/gr';
import cv from "../Assets/Omayma-Ahmad-Resume.pdf"

function CV () {
    return (
        <>
        <h1>cv</h1>
        <Button variant="dark" ><GrCloudDownload/> <a href={cv} download>Download CV</a></Button>
        </>
    )
}

export default CV;