import React, { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../../utils/OrderContext';
import './MenuPage.css';

function MenuPage({ addToOrder }) {
  const [menu, setMenu] = useState([]);
  const { orders } = useContext(OrderContext);

  useEffect(() => {
    fetch('data/menu.json')
      .then(response => response.json())
      .then(data => setMenu(data.menu));
  }, []);

  const [itemQuantities, setItemQuantities] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    setItemQuantities({});
  }, [menu, orders]);

  const handleQuantityChange = (item, quantity) => {
    if (quantity < 0) {
      quantity = 0;
    }
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.name]: quantity
    }));
  };

  const handleAddToOrder = () => {
    menu.forEach(category => {
      category.items.forEach(item => {
        const quantity = itemQuantities[item.name];
        if (quantity && quantity > 0) {
          addToOrder({ ...item, quantity });
        }
      });
    });

    setItemQuantities({});
    setShowSuccessMessage(true);
  };

  return (
    <div className="outer-container">
      <div className="menu-container">
        <h1>Menu</h1>
        {menu.map((category, i) => (
          <div key={i} className="menu-category">
            <h2>{category.category}</h2>
            <div className="items-container">
              {category.items.map((item, j) => {
                const orderItem = orders.find(order => order.name === item.name);
                const quantity = orderItem ? orderItem.quantity : itemQuantities[item.name] || 0;
                return (
                  <div key={j} className="menu-item">
                    {item.picture && <img src={item.picture} alt={item.name} className="menu-item-image" />}
                    <div className="item-info">
                      <h3>{item.name} | {item.price}</h3>
                      <p>{item.description}</p>
                      <div className="quantity-control">
                        <button onClick={() => handleQuantityChange(item, quantity - 1)}>-</button>
                        <input type="text" value={quantity} readOnly />
                        <button onClick={() => handleQuantityChange(item, quantity + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <button onClick={handleAddToOrder} className="add-to-order-button">Add to Order</button>
        {showSuccessMessage && <p>Items added to order successfully!</p>}
      </div>
    </div>
  );
}

export default MenuPage;
