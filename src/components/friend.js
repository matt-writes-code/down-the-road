import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';

const Friend = (prop) => {
    return (

        <Card>
            <CardImg top width="100%" src={prop.image} alt="Aaron" />
            <CardBody>
                <CardTitle>{prop.name}</CardTitle>
                <CardText>{prop.text}</CardText>
            </CardBody>
        </Card>

    );
};

export default Friend;