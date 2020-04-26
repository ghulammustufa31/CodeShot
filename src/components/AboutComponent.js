import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class About extends Component {

    render() {
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}

export default About;