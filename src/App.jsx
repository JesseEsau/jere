import { Routes, Route} from "react-router-dom";
import { Header, Home, Clans, History, Location, Footer, Kingship, Associations} from "./components";

const App = () => {
  return (
    <div className="dark:bg-gray-800">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/location" element={<Location />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/kingship" element={<Kingship />} />
          <Route path="//associations" element={<Associations />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
