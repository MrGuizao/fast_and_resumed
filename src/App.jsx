import { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Routs from "./Routs";


export const AppContext = createContext();

const App = () => {
  const [data, setData] = useState({ name: "Guilherme", idade: 27 });

  return (
    <div className="App">
      <AppContext.Provider value={{ data, setData }}>
        <Router>
          <Navbar />
          <Routs />
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
