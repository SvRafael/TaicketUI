import React from "react";

import { Layout, CardEvent } from "./../components";
import service from "./../service";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Events = () => {
  const [deleteCounter, setDeleteCounter] = React.useState(0);
  const [events, setEvents] = React.useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = React.useState(true);

  React.useEffect(() => {
    const loadLatetsEvents = async () => {
      setIsLoadingEvents(true);

      const response = await service.events.get();

      setEvents(response.data.events || []);
      setIsLoadingEvents(false);
    };

    loadLatetsEvents();
  }, [deleteCounter]);

  const handleDelete = () => {
    setDeleteCounter((deleteCounter) => deleteCounter + 1);
  };

  return (
    <Layout>
      <h4 className="h4">Eventos</h4>

      <Link
        to="/events/create"
        component={Button}
        variant="primary"
        className="mb-2"
        block
      >
        Criar evento
      </Link>

      {isLoadingEvents ? (
        <p>Carregando...</p>
      ) : !events.length ? (
        <p>Nenhum evento encontrado</p>
      ) : (
        events.map((event) => (
          <CardEvent
            className="mb-2"
            event={event}
            key={event._id}
            onDelete={handleDelete}
          />
        ))
      )}
    </Layout>
  );
};

export default Events;
