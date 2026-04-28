import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "./pages/HomePage.jsx"
import About from "./pages/About.jsx"
import Sponsor from "./pages/Sponsor.jsx"
import './styles/reset.sass'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage
    },
    {
      path: "/about",
      Component: About
    },
    {
      path: "/sponsor",
      Component: Sponsor
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
