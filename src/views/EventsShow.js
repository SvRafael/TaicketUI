import React from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

import { Layout } from "./../components";
import service from "./../service";

const EventsShow = () => {
  const params = useParams();
  const [event, setEvent] = React.useState(null);
  const [tickets, setTickets] = React.useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = React.useState(true);

  React.useEffect(() => {
    const loadEvents = async () => {
      setIsLoadingEvents(true);

      const response = await service.events.get({ id: params.id });

      setEvent(response.data.event || null);
      setIsLoadingEvents(false);
    };

    const loadTickets = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/events/${params.id}/tickets`,
        { headers: { authorization: localStorage.getItem("token") } }
      );

      setTickets(response.data.ticket);
    };

    loadEvents();
    loadTickets();
  }, [params.id]);

  const handleClickShare = () => {
    window.navigator.clipboard.writeText(
      `http://localhost:3001/sales/events/${event._id}`
    );

    alert("Link do evento copiado!");
  };

  if (isLoadingEvents) {
    return (
      <Layout>
        <p>Carregando...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h4 className="h4">{event.name}</h4>

      <Card className="mb-4">
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Data e Hora: {moment(event.initialDate).format("DD/MM/YYYY HH:mm")}
          </ListGroupItem>
          <ListGroupItem>Estado: {event.state}</ListGroupItem>
          <ListGroupItem>Cidade: {event.city}</ListGroupItem>
          <ListGroupItem>
            Endereço: {event.street}, {event.number}
          </ListGroupItem>
        </ListGroup>
      </Card>

      <h4 className="h4">Ingressos</h4>

      <Card className="mb-2">
        <ListGroup className="list-group-flush">
          {tickets.map((ticket) => (
            <ListGroupItem>
              {ticket.name} -{" "}
              {ticket.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>

      <Link
        to={`/events/${event._id}/tickets/create`}
        component={Button}
        variant="primary"
        block
      >
        Adicionar ingresso
      </Link>
      <Button variant="outline-primary" block onClick={handleClickShare}>
        Compartilhar evento
      </Button>
      <Link
        to="/events"
        component={Button}
        variant="secondary"
        className="mb-2"
        block
      >
        Voltar
      </Link>
    </Layout>
  );
};

export default EventsShow;
