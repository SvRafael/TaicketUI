import React from "react";

import { Card } from "react-bootstrap";

import { MdEvent } from "react-icons/md";

import { Layout } from "./../components";
import service from "./../service";

const Home = () => {
  const [events, setEvents] = React.useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = React.useState(false);

  React.useEffect(() => {
    const loadEvents = async () => {
      setIsLoadingEvents(true);

      const response = await service.events.get();

      setEvents(response.data.events || []);
      setIsLoadingEvents(false);
    };

    loadEvents();
  }, []);

  return (
    <Layout>
      <h4 className="h4">Dashboard</h4>

      <Card>
        <Card.Body>
          <div className="d-flex align-items-center">
            <MdEvent className="display-4 mr-3" />

            <div>
              <Card.Title className="font-weight-light mb-0">
                Total de eventos
              </Card.Title>
              {isLoadingEvents ? (
                <Card.Text>Carregando...</Card.Text>
              ) : (
                <Card.Text className="font-weight-bolder">
                  {isLoadingEvents ? "" : events.length}
                </Card.Text>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Home;
