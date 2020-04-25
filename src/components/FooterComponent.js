import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdbreact';


function Footer(props) {
    return (
        <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
          <div style={{ backgroundColor: "#6351ce" }}>
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow className="py-4 d-flex align-items-center">
                <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text">
                    Get connected with us on social networks!
                  </h6>
                </MDBCol>
                <MDBCol md="6" lg="7" className="text-center text-md-right">
                  <a className="fb-ic ml-0">
                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                  </a>
                  <a className="tw-ic">
                    <i className="fab fa-twitter white-text mr-lg-4"> </i>
                  </a>
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                  </a>
                  <a className="li-ic">
                    <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer className="mt-5 mb-4 text-center text-md-left">
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="4" xl="4" className="mb-4">
              <img src="assets/images/codeshot-logo-w.png" height="80" width="120" alt="CodeShot" className="img-fluid" style={{marginLeft: "-25px"}} />
              <br />
                <p>
                  Here you can find a number of code snippets. Every programmer want to find a code snippet which can be used for various purposes, this is where you will fulfil your needs.
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3" className="mb-4">
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3" className="mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  <strong>Contact</strong>
                </h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                <p>
                  <i className="fa fa-home mr-3" /> Islamabad, PK 46000, PK
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> help@codeshot.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fa fa-print mr-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <strong>www.codeshot.com</strong>
            </MDBContainer>
          </div>
        </MDBFooter>
    );
}

export default Footer;