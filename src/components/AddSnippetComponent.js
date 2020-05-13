import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Card, CardBody, CardHeader } from 'reactstrap';
import AddSnippetForm from './AddSnippetFormComponent';




class AddSnippet extends Component {

    submit = (values) => {
        // Do something with the form values
        // alert(JSON.stringify(values));
        this.props.saveAddSnippetForm(values.caption, values.snippetText, values.tags)

      }

    render() {
        console.log("From Dashboard", this.props);
        return (
            
            <div>
                
                <Card style={{minHeight:"300px"}}>
                    <CardHeader>
                    <h4 className="text-center">Add Snippet</h4>
                    </CardHeader>
                    <CardBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                    <AddSnippetForm availableTags={this.props.availableTags} onSubmit={this.submit}/>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default AddSnippet;