import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import Code from './CodeComponent';
import { Loading } from './LoadingComponent';


class Home extends Component {

    renderHomeSnippets(snippet, isLoading, errMess) {
        if (isLoading) {
            return (
                <Loading />
            );
        }
        else if (errMess) {
            return (
                <h3>Failed to load!</h3>
            ); 
        }
        else {
            return (
                <Code snippet={snippet}/>
            );
        }
    }

    render() {

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
                            { this.renderHomeSnippets(this.props.snippets.snippets[0], this.props.snippets.isLoading, this.props.snippets.errMess)}
                        </div>
                    </div>
                    <div className="row row-content align-items-center">
                        <div className="col-12 col-md-4 order-md-1">
                            <h2 style={{textAlign : "center"}}>Code Example 2</h2>
                        </div>
                        <div className="col-12 col-md-8 order-md-2">
                        { this.renderHomeSnippets(this.props.snippets.snippets[1], this.props.snippets.isLoading, this.props.snippets.errMess)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;