import React from "react";

import { Layout, CardEvent } from "./../components";

import service from "./../service";

const Home = () => {
  const [latestEvents, setLatestEvents] = React.useState([]);
  const [isLoadingLatestEvents, setIsLoadingLatestEvents] = React.useState(
    false
  );

  React.useEffect(() => {
    const loadLatetsEvents = async () => {
      setIsLoadingLatestEvents(true);

      const response = await service.events.get();

      setLatestEvents(response.data.events || []);
      setIsLoadingLatestEvents(true);
    };

    loadLatetsEvents();
  }, []);

  return (
    <Layout>
      <h4 className="h4">Últimos eventos</h4>

      {latestEvents.map((event) => (
        <CardEvent event={event} className="mb-2" />
      ))}
    </Layout>
  );
};

export default Home;
