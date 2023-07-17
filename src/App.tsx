import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LadingPage from "./pages/LadingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LadingPage />,
	},
]);

export default function () {
	return <RouterProvider router={router} />;
}
