import { BrowserRouter, Routes, Route } from "react-router-dom"
// importiamo le Pages
import HommePage from "./pages/HommePage"
import PostList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"
// layout
import DefaultLayout from "./layouts/DefaultLayout"
import PostDetails from "./pages/PostDetail"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HommePage} />
            <Route path="/chi-siamo" Component={ChiSiamo} />
            <Route path="/post">
              <Route index Component={PostList} />
              <Route path=":id" Component={PostDetails} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
