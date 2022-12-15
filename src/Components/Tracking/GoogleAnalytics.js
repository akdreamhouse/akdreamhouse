import { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { GA_TRACKING_ID } from "../../utils/constants";

function GoogleAnalytics() {
  const pathname = useLocation();
  ReactGA.initialize(GA_TRACKING_ID);

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, [pathname]);
  return;
}

export default GoogleAnalytics;
