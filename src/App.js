import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/Navigation/NavigationBar";
import AllRoutes from "./routes";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavigationBar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
