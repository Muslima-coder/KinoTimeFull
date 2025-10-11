import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { Footer, Header } from "../modules"
import { ExpectedMovie, FilmlarPart, Hero, SearchPage, TvPart } from "../pages"

const DashboardRoutes = () => {

  const routeList = [
    {id:1, path:PATH.boshSahifa, element: <> <Hero /> <ExpectedMovie /> </>},
    {id:2, path:PATH.searchPart, element:<SearchPage/>},
    {id:3, path:PATH.filmlar, element:<FilmlarPart/>},
    {id:3, path:PATH.tv, element:<TvPart/>},
  ]

  return (
    <div>
      <Header/>
      <Routes> {routeList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)} </Routes>
      <Footer/>
    </div>
  )
}

export default DashboardRoutes