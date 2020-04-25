import React, { Component } from 'react';

class Home extends Component {

    render() {
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-8">
                        <h1>Code Snippet 1</h1>
                    </div>
                    <div className="col-12 col-md-4">
                        <h1>Code Snippet 1 - Title</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 order-last">
                        <h1>Code Snippet 2</h1>
                    </div>
                    <div className="col-12 col-md-4 order-first">
                        <h1>Code Snippet 3 - Title</h1>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;