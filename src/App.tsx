import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:projectId",
    element: <Project />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default App;
