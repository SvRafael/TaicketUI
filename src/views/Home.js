import React from "react";

import { Bar } from "react-chartjs-2";

import { Card } from "react-bootstrap";

import { MdEvent } from "react-icons/md";

import { Layout } from "./../components";
import service from "./../service";

const Home = () => {
  const [events, setEvents] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [isLoadingEvents, setIsLoadingEvents] = React.useState(false);
  const [isLoadingData, setIsLoadingData] = React.useState(false);

  React.useEffect(() => {
    const loadEvents = async () => {
      setIsLoadingEvents(true);

      const response = await service.events.get();

      setEvents(response.data.events || []);
      setIsLoadingEvents(false);
    };

    const loadSales = async () => {
      setIsLoadingData(true);

      const response = await service.sales.get();

      const sales = response.data.sales;

      const events = sales
        .filter((sale) => !!sale.event)
        .map((sale) => sale.event);

      const eventsUnique = [
        ...new Set(events.map((event) => event._id)),
      ].map((id) => events.find((event) => event._id === id));

      const labels = eventsUnique.map((event) => event.name);

      const data = eventsUnique.map(
        (event) => sales.filter((sale) => sale.event?._id === event._id).length
      );

      setData({
        labels,
        datasets: [
          {
            label: "Vendas por evento",
            backgroundColor: "#FF6384",
            borderWidth: 1,
            hoverBackgroundColor: "#FF6384",
            data,
          },
        ],
      });
      setIsLoadingData(false);
    };

    loadEvents();
    loadSales();
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

      <h5 className="h5 mt-4 mb-2">Gráficos</h5>

      {isLoadingData ? (
        <p>Carregando...</p>
      ) : (
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1,
                  },
                },
              ],
            },
            maintainAspectRatio: false,
          }}
        />
      )}
    </Layout>
  );
};

export default Home;
