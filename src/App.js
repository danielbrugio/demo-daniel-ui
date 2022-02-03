import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Theming } from "./components/Theming";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import { ButtonDemo } from "./components/Button";
import { GettingStarted } from "./components/GettingStarted";
import { TextInputDemo } from "./components/TextInput";
import { NumberInputDemo } from "./components/NumberInput";
import { SelectDemo } from "./components/Select";
import { AutocompleteDemo } from "./components/Autocomplete";

function App() {
  const theme = useSelector((state) => state);

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Navbar />
          <div className="main">
            <Routes>
              <Route path="/"></Route>
              <Route path="/button" element={<ButtonDemo />} />
              <Route path="/gettingstarted" element={<GettingStarted />} />
              <Route path="/textinput" element={<TextInputDemo />} />
              <Route path="/numberinput" element={<NumberInputDemo />} />
              <Route path="/select" element={<SelectDemo />} />
              <Route path="/autocomplete" element={<AutocompleteDemo />} />
              <Route path="/theming" element={<Theming />} />
              <Route />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
