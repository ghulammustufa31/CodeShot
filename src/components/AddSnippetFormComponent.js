import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';
import { MDBBtn } from 'mdbreact';
import { Form, Input, Label, Toast, ToastBody, ToastHeader } from 'reactstrap';
import Select from 'react-select';
import { Multiselect } from 'react-widgets';





class AddSnippetForm extends Component {

    constructor(props) {
        super(props);

        this.renderMultiSelect = this.renderMultiSelect.bind(this);
    }

    renderMultiSelect({input, data}) {
        console.log("From AddSnippetFormComponent", input);
        console.log("From AddSnippetFormComponent", data);
        return (
            <Select
                {...input}
                isMulti    
                id="tags"
                name="tags"
                options={data}
                className="basic-multi-select"
                value={input.value}
                classNamePrefix="select"
                onBlur={() => input.onBlur()}
                // onChange={(value) => {return input.onChange(value.map(p => p.value))}}
                // onBlur={() => input.onBlur([...input.value])}
                placeholder="Add tags here..." />
    
            // <Multiselect
            // {...input}
            // onBlur={() => input.onBlur()}
            // value={input.value || []}
            // data = {data}
            // valueField={valueField}
            // textField={textField}
            // placeholder="Add tags here..." 
            // />
        );
    }

    render() {
        
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                
                
                <Label htmlFor="caption" className="grey-text">
                Caption
                </Label>
                <Field name="caption" component="input" type="text" className="form-control" placeholder="Enter the caption here..." />
                {/* <Input type="text" id="caption" name="caption" className="form-control" placeholder="" /> */}
                <br />
                <Label htmlFor="tags" className="grey-text">
                Tags
                </Label>
                <Field name="tags" component={this.renderMultiSelect} data={this.props.availableTags.availableTags} />
                <br />
                <Label htmlFor="snippetText" className="grey-text">
                Your snippet
                </Label>
                {/* <Input type="textarea" id="snippetText" name="snippetText" className="form-control" rows="3" placeholder="Copy your snippet here..." /> */}
                <Field name="snippetText" component="input" type="textarea" className="form-control" rows="3" placeholder="Copy your snippet here..." />
                <br />
                <div className="text-center">
                    <MDBBtn type="submit" size="lg" outline color="primary" block><span className="fa fa-plus fa-lg text-primary"></span> Add</MDBBtn>     
                </div>
            </form>
            
        );
    }
}

AddSnippetForm = reduxForm({
    form: 'addSnippet' // a unique name for this form
  })(AddSnippetForm);
  
  export default AddSnippetForm;

