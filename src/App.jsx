import "./Sass/App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/About",
      element: <About />,
      errorElement: <Error />,
    },
    {
      path: "/Contact",
      element: <Contact />,
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
