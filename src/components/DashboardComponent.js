import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse, Button, CardBody, Card, UncontrolledCollapse, ButtonGroup } from 'reactstrap';
import { MDBBtn } from 'mdbreact';
import AddSnippet from './AddSnippetComponent';
import UpdateSnippet from './UpdateSnippetComponent';
import { addInitialAddSnippetForm, saveAddSnippetForm }  from '../redux/ActionCreators/addSnippetFormActions';
import { UncontrolledAlert } from 'reactstrap';

const mapStateToProps = state => {
    return {
        initialAddSnippetForm: state.initialAddSnippetForm,
        addSnippetForm: state.addSnippetForm,
        snippetFormErr: state.snippets.snippetFormErr
    }
}

const mapDispatchToProps = (dispatch) => ({
    addInitialAddSnippetForm: () => {dispatch(addInitialAddSnippetForm())},
    saveAddSnippetForm: (snippetForm) => {dispatch(saveAddSnippetForm(snippetForm))}
})

class Dashboard extends Component {

    componentDidMount() {
        this.props.addInitialAddSnippetForm();
    }

    render() {
        if (!this.props.loggedUser.isLoggedIn) {
            return (
                <Redirect to="/"></Redirect>
            );
        }
        else {
            return (
                <div className="container">
                    { this.props.snippetFormErr != null ? !this.props.snippetFormErr ? (
                        <UncontrolledAlert color="success">
                            Form submittied successfully!
                        </UncontrolledAlert>
                    ) :
                    (
                        <UncontrolledAlert color="danger">
                            There was an error submitting the form.
                        </UncontrolledAlert>
                    ) :
                    (
                        <div></div>
                    )
                    }
                    <div className="row mt-2 align-contents-center">
                        <div className="col-12">
                            <h3>Dashboard</h3>  
                            <hr />
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-2">
                                <MDBBtn size="lg"  color="" id="toggleAdd" block><span className="fa fa-plus fa-lg text-primary"></span> New</MDBBtn>     
                                <MDBBtn size="lg"  color="" id="toggleUpdate" block><span className="fa fa-edit fa-lg text-dark"></span> Edit</MDBBtn>    
                                <MDBBtn size="lg"  color="" id="toggleDelete" block><span className="fa fa-times fa-lg text-danger"></span> Delete</MDBBtn>
                        </div>
                        <div className="col-10">
                            <UncontrolledCollapse toggler="#toggleAdd">
                                <AddSnippet saveAddSnippetForm={this.props.saveAddSnippetForm} availableTags={this.props.availableTags}/>
                            </UncontrolledCollapse>
                            <UncontrolledCollapse toggler="#toggleUpdate">
                                <Card style={{minHeight:"300px"}}>
                                    <CardBody>
                                        <UpdateSnippet />
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                            <UncontrolledCollapse toggler="#toggleDelete">
                                <Card style={{minHeight:"300px"}}>
                                    <CardBody>
                                        This is delete card body.
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);