import React from "react";

import moment from "moment";

import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const CardEvent = ({ event, ...rest }) => {
  return (
    <Card {...rest}>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          {moment(event.initialDate).format("DD/MM/YYYY HH:mm")}
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroupItem>Estado: {event.state}</ListGroupItem>
        <ListGroupItem>Cidade: {event.city}</ListGroupItem>
        <ListGroupItem>
          Endereço: {event.street}, {event.number}
        </ListGroupItem>
      </ListGroup>

      <Card.Body>
        <Button color="primary" block>
          Visualizar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardEvent;
