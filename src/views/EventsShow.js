import React from "react";

import { Layout, CardEvent } from "./../components";
import service from "./../service";

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
    setDeleteCounter((deleteCounter) => deleteCounter++);
  };

  if (isLoadingEvents) {
    return (
      <Layout>
        <h4 className="h4">Eventos</h4>

        <p>Carregando...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h4 className="h4">Eventos</h4>

      {events.map((event) => (
        <CardEvent
          className="mb-2"
          event={event}
          key={event._id}
          onDelete={handleDelete}
        />
      ))}
    </Layout>
  );
};

export default Events;
