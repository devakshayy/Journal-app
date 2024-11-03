import HomePage from "./Pages/HomePage"
import JournalEntry from "./Pages/JournalEntry"
import JournalOutput from "./Pages/JournalOutput"
import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  

  return (
    
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Output" element={<JournalOutput/>}/>
            <Route path="/EntryForm" element={<JournalEntry/>}/>
         </Routes>  
      </BrowserRouter>

  )
}

export default App
