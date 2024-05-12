import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { PrivateTemplate } from "../template/private";
import { Dashboard } from "../pages/dashboard";
import { Locais } from "../pages/locais";
import { Registro } from "../pages/registro";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <PrivateTemplate />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/locais",
        element: <Locais />,
      },
      {
        path: "/dashboard/locais/registro",
        element: <Registro />,
      },
      {
        path: "/dashboard/locais/registro/:id",
        element: <Registro />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Página não encontrada</h1>
      </div>
    ),
  },
]);
