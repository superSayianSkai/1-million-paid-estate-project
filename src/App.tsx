import HousingPortfolioLanding from "./components/HousingPortfoliolanding"
import HouseDemo from "./components/HouseDemo"
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom"

const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
)

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { path: "/", element: <HousingPortfolioLanding /> },
          { path: "/demo", element: <HouseDemo /> }
        ]
      }
    ],
  )


  return <RouterProvider router={router} />
}

export default App
