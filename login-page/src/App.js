import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Auth from "./Auth";

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={(<Auth/>)} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
