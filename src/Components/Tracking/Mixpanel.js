import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import { useLocation } from "react-router-dom";
import { MIXPANEL_TOKEN } from "../../utils/constants";

function Mixpanel() {
  const pathname = useLocation();
  useEffect(() => {
    mixpanel.init(MIXPANEL_TOKEN, { debug: false });
    let path = "Home";
    if (window.location.pathname.slice(1) === "") mixpanel.track(path);
    else mixpanel.track(window.location.pathname.slice(1));
  }, [pathname]);

  return;
}

export default Mixpanel;
