import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Valorant from "./Valorant";

function App() {
  const r = createBrowserRouter([
    {
      path: "/",
      element: <Valorant />,
    },
  ]);
  return (
    <>
      <RouterProvider router={r}></RouterProvider>
    </>
  );
}

export default App;
