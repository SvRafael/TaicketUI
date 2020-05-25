import React from "react";
import "./App.css";
import Routes from "./../components/Routes";


import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext } from "./../contexts";

const App = () => {
  const [company, setCompany] = React.useState(null);

  return (
    <main className="App">
      <AuthContext.Provider value={{ company, setCompany }}>
        <Routes />
      </AuthContext.Provider>
    </main>
  );
};

export default App;
