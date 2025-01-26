import { useState, useEffect } from "react";
import Section1 from "./components/Section1";
import Counter from "./components/Counter";
import Upgrades from "./components/Upgrade shop";

//we need an element to store our upgrades --> either a local file (like I did in the lists and keys demo)
//made a lib folder with data file

export default function App() {
  // Lets define our state variables!
  // They are variables whose values are stored in state!

  let [cookies, setCookies] = useState(0);
  let [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  //================================================================================

  // const handleBuyUpgrade = (upgrades) => {
  //   if (cookies < upgrades.cost) {
  //     setTimeout(() => {
  //       setNotEnoughCookiesMessage(true);
  //     }, 100);
  //     setTimeout(() => {
  //       setNotEnoughCookiesMessage(false);
  //     }, 1000);
  //   } else {
  //     setCookies((cookies) => cookies - upgrades.cost);
  //     setCookiesPerSecond(
  //       (cookiesPerSecond) => cookiesPerSecond + upgrades.increase
  //     );
  //   }
  // };

  //======================================================================================

  return (
    <>
      <h1>My Cookie Clicker </h1>
      <div id="main-container">
        <div id="section1">
          <Section1
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />

          <Counter
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />
          <div id="upgrades">
            <Upgrades setCookies={setCookies} />
          </div>
        </div>
      </div>
    </>
  );
}
