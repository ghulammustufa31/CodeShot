import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class Code extends Component {


    getTagText(tag) {
        return tag.tag;
    }

    getTags(tags) {
        let lTags = []; 
        tags.forEach((tag) => lTags.push(this.getTagText(tag)));
        console.log(lTags);
        return lTags.join();
    }

    renderCode({snippet}) {

        this.getTags(snippet.tags);

        if (snippet != null) {
            return (
                <div>
                    <Card className="codeCard">
                        <CardHeader>{snippet.caption}</CardHeader>
                        <CardBody>
                        <textarea className="col-12 code-snippet-textarea" rows="10" value={snippet.code} readOnly>
                            
                        </textarea>
                        </CardBody>
                        <CardFooter>Tags: <strong>{this.getTags(snippet.tags)}</strong></CardFooter>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    
    render() {
        return (
            <div>
                {this.renderCode(this.props)}
            </div>
        );
    }
}

export default Code;