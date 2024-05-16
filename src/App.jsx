import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
