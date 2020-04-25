import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import Code from './CodeComponent';


class Home extends Component {


    render() {

        console.log(this.props.snippets);

        return(
            <div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header align-items-center">
                            <div className="col-12 col-md-4">
                                <h1>CodeShot</h1>
                            </div>
                            <div className="col-12 col-md-8">
                                <p>Find your code snippet <strong><Link to="/library">here</Link></strong>!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <div className="container">
                    <div className="row header justify-content-center">
                        <div className="col-auto">
                            <h1>Top Codes</h1>
                        </div>
                    </div>
                </div>
                <div className="container bg-light">

                    <div className="row row-content align-items-center">
                        <div className="col-12 col-md-4 order-md-2">
                            <h2 style={{textAlign : "center"}}>Code Example 1</h2>
                        </div>
                        <div className="col-12 col-md-8 order-md-1">
                            <Code snippet={this.props.snippets[0]}/>
                        </div>
                    </div>
                    <div className="row row-content align-items-center">
                        <div className="col-12 col-md-4 order-md-1">
                            <h2 style={{textAlign : "center"}}>Code Example 2</h2>
                        </div>
                        <div className="col-12 col-md-8 order-md-2">
                            <Code snippet={this.props.snippets[1]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;