import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Explore from "../pages/Explore";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path:':explore',
        element:<Explore/>
      },
      {
        path:':explore/:id',
        element:<DetailPage/>
      },
      {
        path : "search",
        element:<SearchPage/>
      }
    ]
  }
]);

export default router;
