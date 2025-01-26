export default function Section1({ cookies, setCookies }) {
  return (
    <>
      <p>Cookies: {cookies}</p>
      <button onClick={() => setCookies(cookies + 1)}>
        Click to Add 1 Cookie
      </button>
    </>
  );
}
