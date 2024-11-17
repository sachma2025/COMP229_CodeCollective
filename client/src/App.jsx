import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import ApartmentsPage from "./pages/ApartmentsPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "users", element: <UserPage /> },
        { path: "apartments", element: <ApartmentsPage /> },
      ]
    }
  ]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

