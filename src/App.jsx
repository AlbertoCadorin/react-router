import { BrowserRouter, Routes, Route } from "react-router-dom"
// importiamo le Pages
import HommePage from "./pages/HommePage"
import PageList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"
//  nav
import NavBar from "./components/NavBar"

// layout
import DefaultLayout from "./layouts/DefaultLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HommePage} />
            <Route path="/post" Component={PageList} />
            <Route path="/chi-siamo" Component={ChiSiamo} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
