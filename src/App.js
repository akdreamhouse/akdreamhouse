import React from "react";
import AllRoutes from "./routes";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

const App = () => {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
};

export default App;
