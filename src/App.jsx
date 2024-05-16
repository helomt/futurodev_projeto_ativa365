import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./context/auth-context";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
    <Helmet titleTemplate="%s - Ativa365"/>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
