import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/book", element: <Book /> },
]);

function App() {
  return (
    <>
      <head>
        <title>Little Lemon</title>
        <meta name="description" content="little lemon website" />
        <meta name="og:title" content="little lemon" />
        <meta name="og:description" content="little lemon website" />
        <meta name="og:image" content="" />
      </head>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;
