import Home from "./routes/home/home.component";
import Page from "./components/page/page.component";

import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/page' element={<Page/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
