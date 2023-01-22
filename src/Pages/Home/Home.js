import React, { useEffect, useState } from "react";
import "react-animated-slider/build/horizontal.css";
import CTA from "../../Components/cta/CTA";
import Blog from "./Components/blog/Blog";
import Features from "./Components/features/Features";
import Header from "./Components/Header/Header";
import Possible from "./Components/possible/Possible";
import HomeServices from "./Components/Services/Services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// manual modules
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import CarouselWrapper from "../../Components/Carousel";

function Home() {
  const [userEmailId, setUserEmailId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "A.K. Dream House - Home";
  }, []);

  const handleGetStarted = () => {
    if (userEmailId) {
      toast.success("Email has been sent, Will connect soon", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="Home">
        <Header
          handleGetStarted={handleGetStarted}
          setUserEmailId={setUserEmailId}
        />
        <HomeServices navigate={navigate} />
        <Features />
        <Possible />
        <CTA navigate={navigate} />
        <Blog navigate={navigate} />
        <CarouselWrapper />
      </div>
      {/* //notification */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Home;
