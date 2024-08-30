import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import BoardofDirector from './assets/page/BoardofDirector';

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<BoardofDirector/>} />
     
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App