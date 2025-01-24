import React, { useState, useEffect } from "react";
//we need an element to store our upgrades --> either a local file (like I did in the lists and keys demo)
//made a lib folder with data file

export default function App() {
  // Lets define our state variables!
  // They are variables whose values are stored in state!

    let [cookies, setCookies] = useState(0);
    let [cookiesPerSecond, setCookiesPerSecond] = useState(1);