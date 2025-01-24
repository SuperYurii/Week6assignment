import { useState } from "react";

export default function Section1({
  //adding list of props
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
  //function to update the amount of cookies
  function handleCookies() {
    setCookies(cookies + 1);
  }

  return (
    <>
      <p>Cookies: {cookies}</p>
    </>
  );
}
