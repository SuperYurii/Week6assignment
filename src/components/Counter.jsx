import { useEffect } from "react";
export default function Counter({ setCookies, cookiesPerSecond }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cookiesPerSecond);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [cookiesPerSecond, setCookies]);
  return <div>Cookies per second: {cookiesPerSecond}</div>;
}
//   useEffect(() => {
//   const myInterval = setInterval(() => {
//     setCookies((currentCookies) => {
//       currentCookies + cps;
//     });
//   }, 1000);
//   return () => {
//     clearInterval(myInterval);
//   };
// }, [cps]);
