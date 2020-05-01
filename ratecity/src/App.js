import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import LoanProductList from "./components/LoanProductList";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <LoanProductList />
    </div>
  );
}

export default App;
