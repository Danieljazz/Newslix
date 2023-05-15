import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18next";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/country/:countryName",
      element: <Country />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
