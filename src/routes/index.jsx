import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import NotFound404 from "../pages/NotFound404";
import LayoutMain from "../Layouts/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LayoutMain />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <DetailPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);

export default routes;
