import { createBrowserRouter, RouterProvider } from "react-router"
function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />,

  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App
