import React, { useContext } from 'react';
import { OrderContext } from '../../utils/OrderContext';
import './OrderPage.css';

const OrderPage = () => {
  const { orders } = useContext(OrderContext);
  const taxRate = 0.13; // Tax rate of 13%

  // Calculate the total price including tax
  const totalPrice = orders.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);
  const totalTax = totalPrice * taxRate;
  const totalWithoutTax = totalPrice - totalTax;

  return (
    <div className="order-outer-container">
      <div className="order-page-container">
        <h1>Order Page</h1>
        {orders.length > 0 ? (
          <div>
            <h2>Selected Items</h2>
            <ul className="order-list">
              {orders.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity} - Price: {item.price}
                </li>
              ))}
            </ul>
            <div className="total-prices">
              <div>
                Total Price (excl. tax): ${totalWithoutTax.toFixed(2)}
              </div>
              <div>----------------</div>
              <div>
                Total Price (incl. tax): ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        ) : (
          <p>No items selected.</p>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
