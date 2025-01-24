import React, { useState, useEffect } from "react";
import Section1 from "./components/Section1";
import Timer from "./components/Timer";
//we need an element to store our upgrades --> either a local file (like I did in the lists and keys demo)
//made a lib folder with data file

export default function App() {
  // Lets define our state variables!
  // They are variables whose values are stored in state!

  let [cookies, setCookies] = useState(0);
  let [cookiesPerSecond, setCookiesPerSecond] = useState(1);

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

          <Timer
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />
        </div>
      </div>
    </>
  );
}
