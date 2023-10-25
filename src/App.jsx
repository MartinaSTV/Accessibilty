import "./Sass/App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "Accessibilty/",
      element: <Home />,
    },
    {
      path: "Accessibilty/About",
      element: <About />,
    },
    {
      path: "Accessibilty/Contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
