import { BrowserRouter, useRoutes, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import BookingPage  from "./BookingPage";
import ConfirmedBooking from './ConfirmedBooking ';

function AppRoutes() {
    const routes = useRoutes([
      { path: "/", element: <Homepage /> },
      { path: "/reservation", element: <BookingPage /> },
      { path: "/booking-success", element: <ConfirmedBooking /> },
    ]);

    return routes;
  }


const Routing = () => (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
);

export default Routing