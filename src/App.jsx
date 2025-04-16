import { BrowserRouter, Routes, Route } from "react-router-dom"

// importiamo le Pages
import HommePage from "./pages/HommePage"
import PageList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HommePage} />
          <Route path="/post" Component={PageList} />
          <Route path="/chi-siamo" Component={ChiSiamo} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
