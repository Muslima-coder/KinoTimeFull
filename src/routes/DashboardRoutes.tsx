import { Route, Routes } from "react-router-dom"
import { PATH } from "../components"
import { Footer, Header } from "../modules"
import { AnimePart, ExpectedMovie, FilmlarPart, Hero, LivePart, MultfilmlarPart, SearchPage, SerillarPart, TariflarPart, TvPart } from "../pages"

const DashboardRoutes = () => {

  const routeList = [
    {id:1, path:PATH.boshSahifa, element: <> <Hero /> <ExpectedMovie /> </>},
    {id:2, path:PATH.searchPart, element:<SearchPage/>},
    {id:3, path:PATH.tv, element:<TvPart/>},
    {id:4, path:PATH.filmlar, element:<FilmlarPart/>},
    {id:5, path:PATH.seriallar, element:<SerillarPart/>},
    {id:6, path:PATH.multfilmlar, element:<MultfilmlarPart/>},
    {id:7, path:PATH.anime, element:<AnimePart/>},
    {id:8, path:PATH.jonliEfir, element:<LivePart/>},
    {id:9, path:PATH.tariflar, element:<TariflarPart/>},
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