import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import ContactPage from "./pages/ContactPage";
import GamePage from "./pages/GamePage";
import NewsPage from "./pages/NewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/news', element: <NewsPage /> },
      {
        path: "games",
        children: [
          { index: true, element: <GamesPage /> },
          { path: ":id", element: <GamePage /> },
        ]
      },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
