/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Hello from Home page!</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>
    </>
  );
}
