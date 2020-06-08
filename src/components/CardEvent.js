import React from "react";

import { useHistory } from "react-router";
import moment from "moment";

import service from "./../service";

import { Card, Button } from "react-bootstrap";

const CardEvent = ({ event, onDelete = () => {}, ...rest }) => {
  const history = useHistory();

  const handleClickView = (e) => {
    history.push(`/events/${event._id}`);
  };

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
