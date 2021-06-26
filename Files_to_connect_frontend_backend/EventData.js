import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Card,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import styled from 'styled-components';

const CardContainer = styled.div`
align-items: center;
justify-content: center;
`;

const EventData = (event) => {
    return(
        <CardContainer style={{ marginLeft: '440px', paddingTop: '16px', paddingBottom: '63px'}}>
            <Card style={{ width: '30rem'}}>
                <Card.Body style={{ textAlign: "center"}}>
                    <Card.Title>Event Type: {event.eventName}</Card.Title>
                    <Card.Text>
                        Some quick details about Event Organised.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Date_of_Event: {event.date}</ListGroupItem>
                    <ListGroupItem>No_Of_Guest: {event.noOfguest}</ListGroupItem>
                    <ListGroupItem>Food_Served: {event.typeOfFood}</ListGroupItem>
                    <ListGroupItem>User_id: {event.uid}</ListGroupItem>
                </ListGroup>
                <Card.Body style={{ textAlign: "center"}}>
                    <Button style={{ margin: '5px' }} variant="danger">Cancel</Button>
                    <Button variant="warning">Update</Button>
                </Card.Body>
            </Card>
        </CardContainer>

    );
};

export default EventData;
