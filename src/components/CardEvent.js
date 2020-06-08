import React from "react";

import moment from "moment";
import service from "./../service";

import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const CardEvent = ({ event, onDelete = () => {}, ...rest }) => {
  const handleClickView = (e) => {};

  const handleClickDelete = async (e) => {
    const response = window.confirm("Deseja remover este evento?");

    if (response) {
      await service.events.remove({ id: event._id });
      onDelete(event);
    }
  };

  return (
    <Card {...rest}>
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          {moment(event.initialDate).format("DD/MM/YYYY HH:mm")}
        </Card.Text>
      </Card.Body>

      {/* <ListGroup className="list-group-flush">
        <ListGroupItem>Estado: {event.state}</ListGroupItem>
        <ListGroupItem>Cidade: {event.city}</ListGroupItem>
        <ListGroupItem>
          Endereço: {event.street}, {event.number}
        </ListGroupItem>
      </ListGroup> */}

      <Card.Footer>
        <Button variant="primary" block onClick={handleClickView}>
          Visualizar
        </Button>
        <Button variant="danger" block onClick={handleClickDelete}>
          Remover
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CardEvent;
