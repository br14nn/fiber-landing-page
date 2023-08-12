import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LadingPage from "./pages/LadingPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LadingPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

export default function () {
  return <RouterProvider router={router} />;
}
