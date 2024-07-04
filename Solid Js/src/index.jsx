import { render } from "solid-js/web";
import { Router, Route, A } from "@solidjs/router";
import "./index.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
const App = (props) => (
  <>
    <nav>
      <A href="/">Home</A>
      <A href="/about">About</A>
      <A href="/contact">contact</A>
    </nav>
    {props.children}
  </>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  ),
  document.getElementById("root")
);
