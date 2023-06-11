//app.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import MenuPage from './components/menupage/MenuPage';
import OrderPage from './components/orderpage/OrderPage';
import ReservationPage from './components/reservationpage/ReservationPage';
import NavBar from './utils/NavBar';
import Footer from './utils/Footer';
import { OrderContext } from './utils/OrderContext';
import UserContext from './utils/UserContext';
import LoginPage from './components/loginpage/LoginPage';
import SignupPage from './components/loginpage/SignupPage';

function App() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  const addToOrder = (item) => {
    setOrders((prevOrder) => {
      const existingItem = prevOrder.find((i) => i.name === item.name);
      if (existingItem) {
        // If the item already exists in the order, update its quantity
        return prevOrder.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        // If the item does not exist in the order, add it
        return [...prevOrder, item];
      }
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <OrderContext.Provider value={{ orders, setOrders }}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage addToOrder={addToOrder}/>} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
    </OrderContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
