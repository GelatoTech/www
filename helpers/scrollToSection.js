import { scroller } from "react-scroll";

export default (elementID) => {
  scroller.scrollTo(elementID, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}