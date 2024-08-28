import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import HealthFileContextProvider from "./contexts/HealthFileContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Option from "./components/Option/Option";
import Data from "./components/Data/Data";

const App = () => {
  return (
    <HealthFileContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Option />
          <Routes>
            <Route path="/" exact element={<Data />} />
            <Route path="/form" exact element={<Form />} />
          </Routes>
          {/* <Form /> */}
        </div>
      </BrowserRouter>
    </HealthFileContextProvider>
  );
};

export default App;
