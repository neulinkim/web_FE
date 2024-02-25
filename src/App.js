import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashPage from "./pages/SplashPage";
import Order from "./pages/Order";
import CurrentOrder from "./pages/CurrentOrder";
import RecentOrder from "./pages/RecentOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SplashPage />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/currentOrder"} element={<CurrentOrder />} />
        <Route path={"/recentOrder"} element={<RecentOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
