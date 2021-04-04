import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { IoCloudyNightOutline } from "react-icons/io5";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left"></MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; omayma {new Date().getFullYear()} <IoCloudyNightOutline />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
