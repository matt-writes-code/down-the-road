import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';

const Friend = (prop) => {
    return (

        <Card>
            <CardImg top width="100%" src={prop.image} alt="Aaron" />
            <CardBody>
                <CardTitle className="name">{prop.name}</CardTitle>
                <CardText className="text">{prop.text}</CardText>
                <CardText className="text">{prop.text2}</CardText>
                <CardText className="text">{prop.text3}</CardText>
                <CardText className="text">{prop.text4}</CardText>
                <CardText className="quotes">{prop.quote}</CardText>
            </CardBody>
        </Card>

    );
};

export default Friend;