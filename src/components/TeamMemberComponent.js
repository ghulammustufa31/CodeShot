import React from 'react';
import { Card, CardTitle, CardImg, CardBody, CardText} from 'reactstrap';


function TeamMemberComponent(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <CardImg variant="top" src="assets/images/mustufa.jpg" alt="Ghulam Mustufa" />
            <CardBody className="text-center">
                <CardTitle>Syed Ghulam Mustufa</CardTitle>
                <CardText>
                Needs no intruduction. An example of dedication, persistance and hardwork. He is the backbone of CodeShot.
                </CardText>
            </CardBody>
        </Card>
    );
}

export default TeamMemberComponent;

