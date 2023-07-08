import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import SearchPage from './pages/SearchPage';
import SavedStocks from "./pages/SavedStocks";
function App() {

  return (
    <div className="w-full min-h-screen max-w-screen-lg py-0	px-5 my-0 mx-auto text-center bg-slate-800">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<SearchPage/>} />
          <Route path='/saved' element={<SavedStocks/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App