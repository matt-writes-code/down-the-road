import React from 'react';
import {
    Card, CardImg
} from 'reactstrap';

const Photos = (prop) => {
    return (

        <Card>
            <CardImg top width="100%" src={prop.image} alt="Aaron" />
        </Card>

    );
};

export default Photos;