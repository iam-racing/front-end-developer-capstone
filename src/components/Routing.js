import { BrowserRouter, useRoutes, Routes } from 'react-router-dom';
import Homepage from "./Homepage";

function AppRoutes() {
    const routes = useRoutes([
      { path: "/", element: <Homepage /> }
    ]);
  
    return routes;
  }

  
const Routing = () => (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
);

export default Routing