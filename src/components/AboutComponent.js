import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import TeamMember from './TeamMemberComponent';

class About extends Component {

    render() {
        return (
            <>

                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />  
                    </div>
                </div>
            
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-md-8 offset-md-2">
                            <h1>CodeShot</h1>
                            <p>The idea is to archive and share code snippets by uploading them to the website. Main features of CodeShot is archiving/storing, uploading, viewing, and searching code snippets which can be helpful for the user. The code snippets are stored with certain tags associated with them which can be helpful for listing and searching.</p>
                        </div>
                        <div className="col-12 col-md-2"></div>
                    </div>
                </div>

                <div className="container bg-dark">
                    <div className="row">
                        <div className="col-12 text-center mt-5" style={{color: "whitesmoke"}}>
                            <h1>Meet Our Founders</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3" style={{display: "flex"}}>
                        <div className="mr-3">
                            <TeamMember />
                        </div>
                        <div className="mr-3">
                            <TeamMember />  
                        </div>
                        <div >
                            <TeamMember />
                        </div>
                    </div>
                    <br />
                </div>
            
            </>
        );
        
    }
}

export default About;