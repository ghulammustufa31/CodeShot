import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, CardLink, CardHeader } from 'reactstrap';
import Select from 'react-select';
import Code from './CodeComponent';
import { Card, CardText, CardBody } from 'reactstrap';
import Snippets from './SnippetsComponent';



class Library extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            selectedSnippets: null,
            tags: [
                { value: 'c#', label: 'C#' },
                { value: 'react', label: 'React' },
                { value: 'angularComponent', label: 'Angular Component' }
              ]
        }
    }
    
    checkSelectedValue(selectedTags) {

        // Filter Snippets
        // let res = [];
        // this.props.snippets.forEach((snippet) => {
        //     snippet.tags.forEach((tag) => {
        //         selectedTags.map((selectedTag) => {
        //             if (tag.tag === selectedTag.value) {
        //                 res.push(snippet);
        //             }
        //             return 1;
        //         });
        //     });
        // });

        const res = this.props.snippets.filter((snippet) => {
            return snippet.tags.some((tag) => {
                return selectedTags.some((selectedTag) => {
                    return tag.tag === selectedTag.value;
                });
            });
        });

        this.setState({selectedSnippets: res});
    }

    render() {

        return (
            <>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Library</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Library</h3>
                        <hr />  
                    </div>
                </div>
                <div className="row bg-light align-items-center">
                    <div className="col-12 col-md-8 offset-md-2 mt-3">
                        <h5 style={{textAlign: "center"}}>Search by Tags</h5>
                        <Select isMulti
                            name="colors"
                            options={this.state.tags}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(value) => this.checkSelectedValue(value)}/>
                        
                        <hr />
                    </div>
                    <div className="col-12 col-md-2"></div>
                </div>
                
            </div>
            <div className="container bg-primary">
                <div className="row row-header">
                    <div className="col-12 col-md-3">
                        <Card className="mt-5">
                            <CardHeader>Latest Post</CardHeader>
                            <CardBody>
                                <CardText><CardLink href="#">Post 1</CardLink></CardText>
                                <CardText><CardLink href="#">Post 2</CardLink></CardText>
                                <CardText><CardLink href="#">Post 3</CardLink></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-9">
                        <Snippets filteredSnippets={this.state.selectedSnippets} snippets={this.props.snippets} />
                    </div>
                </div>
            </div>
            </>
            
        );
    }
}

export default Library;