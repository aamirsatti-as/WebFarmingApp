import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Index from './component/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <div >

          <Routes>

            <Route exact path="/" element={<Index />} />


          </Routes>




        </div>

      </Router>

    </div>
  );
}

export default App;
