import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home.component';

const Navigation = () => {
  return(
    <div>
      <div> This is a navigation</div>
      <Outlet />
    </div>
  );
}

const App = () => {
  
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
