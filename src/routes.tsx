import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "/games", element: <GamesPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
