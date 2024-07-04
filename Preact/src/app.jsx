import { h } from "preact";
import { Router, Route } from "preact-router";
import { Link } from "preact-router";

//Pages Section
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

//styles
import "./app.css";

export function App() {
  return (
    <>
      <div>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
        </Router>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
