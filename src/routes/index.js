import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Explore from "../pages/Explore";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path : "search",
        element:<SearchPage/>
      }
    ]
  }
]);

export default router;
