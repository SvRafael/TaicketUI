import React from "react";

import { useParams } from "react-router";
import moment from "moment";

import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

import service from "./../service";

const EventsShow = () => {
  const params = useParams();
  const [show, setShow] = React.useState(false);
  const [event, setEvent] = React.useState(null);
  const [ticket, setTicket] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [cpf, setCpf] = React.useState(null);
  const [isLoadingEvent, setIsLoadingEvent] = React.useState(true);
  const [isLoadingSale, setIsLoadingSale] = React.useState(false);

  React.useEffect(() => {
    const loadEvent = async () => {
      setIsLoadingEvent(true);

      const response = await service.sales.getEvent({ id: params.id });

      setEvent(response.data.event || null);
      setIsLoadingEvent(false);
    };

    loadEvent();
  }, [params.id]);

  const handleClose = () => {
    setShow(false);
  };

  const handleClickBuy = (event, ticket) => {
    setShow(true);
    setTicket(ticket);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeCpf = (event) => {
    setCpf(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoadingSale(true);

    const responseParticipant = await service.participants.create({
      name,
      email,
      cpf,
    });

    await service.sales.create({
      company: event.company._id,
      event: event.company._id,
      ticket: ticket._id,
      participant: responseParticipant.data.participant._id,
    });

    setName("");
    setEmail("");
    setCpf("");
    setIsLoadingSale(false);
    setShow(false);
    alert(
      "Ingresso comprado com sucesso! Em breve receberá as informações por e-mail!"
    );
  };

  if (isLoadingEvent) {
    return (
      <Container>
        <p className="my-4">Carregando...</p>
      </Container>
    );
  }

  return (
    <Container className="my-4">
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

      <Card className="mb-4">
        <ListGroup className="list-group-flush">
          {event.tickets.map((ticket) => (
            <ListGroupItem
              className="d-flex align-items-center justify-content-between"
              key={ticket._id}
            >
              {ticket.name} -{" "}
              {ticket.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
              <Button
                size="sm"
                onClick={(event) => handleClickBuy(event, ticket)}
              >
                Comprar
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>

      <h4 className="h4">Empresa</h4>

      <Card className="mb-4">
        <ListGroup className="list-group-flush">
          <ListGroupItem>{event.company.name}</ListGroupItem>
          <ListGroupItem>{event.company.fantasyName}</ListGroupItem>
          <ListGroupItem>CPF: {event.company.cpf}</ListGroupItem>
          <ListGroupItem>CNPJ: {event.company.cnpj}</ListGroupItem>
        </ListGroup>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Comprar ingresso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-2">
              Ingresso: <span>{ticket?.name}</span>
            </p>
            <p className="mb-2">
              Valor:{" "}
              <span>
                {ticket?.value?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>

            <h5 className="h5 mt-4 mb-2">Dados cadastrais</h5>

            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Informe seu nome"
                value={name}
                onChange={handleChangeName}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Informe seu email"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Informe seu CPF"
                value={cpf}
                onChange={handleChangeCpf}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary" disabled={isLoadingSale}>
              {isLoadingSale ? "Carregando..." : "Comprar"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default EventsShow;
