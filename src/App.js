import Home from "./routes/home/home.component";

import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
      </Routes>
      
    </div>
  );
}

export default App;
