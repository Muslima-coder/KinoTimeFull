// // App.jsx
// import { Route, Routes } from "react-router-dom";
// import Hero from "./pages/Hero";
// import SingleMovie from "./pages/SingleMovie";
// import Layout from "./layouts/Layout";
// import ContentList from "./components/ExpectedMovies";


// function App() {
  //   return (
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         {/* Hero va ContentList birlashtirilgan */}
    //         <Route
    //           index
    //           element={
      //             <>
      //               <Hero />
//               <ContentList />
//             </>
//           }
//         />

//         <Route path="singleMovie/:id" element={<SingleMovie />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

import { ExpectedMovie, Header, Hero } from "./pages"


const App = () => {
  return (
    <>
    <Header/>
    <main>
    <Hero/>
    {/* <ExpectedMovie/> */}
    </main>
    </>
  )
}

export default App
