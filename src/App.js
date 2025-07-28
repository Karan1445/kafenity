import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const categories = [
    { name: 'Rice Mania' },
    { name: 'Chatkara Chinese' },
    { name: 'Mocktails' },
    { name: 'Beverages' },
    { name: 'Signature Burgers' },
    { name: 'Sandwiches' },
    { name: 'All Day Snacks' },
  ];

  const items = {
    'Rice Mania': [
      { name: 'Schezwan Rice', price: 160 },
      { name: 'Paneer Biryani', price: 160 },
      { name: 'Veg Hyderabadi Biryani', price: 160 },
      { name: 'Cheese Chilli Rice', price: 160 },
      { name: 'Veg Pulav', price: 160 },
      { name: 'Tandoori Paneer Pulav', price: 160 },
      { name: 'Paneer Handi Biryani', price: 160 },
      { name: 'Veg Biryani', price: 160 },
    ],
    'Chatkara Chinese': [
      { name: 'Veg Triple Rice', price: 160 },
      { name: 'Veg Triple Noodles', price: 160 },
      { name: 'Manchurian Rice', price: 160 },
      { name: 'Manchurian Noodles', price: 160 },
      { name: 'Schezwan Noodles', price: 160 },
      { name: 'Fried Rice', price: 160 },
      { name: 'Schezwan Fried Rice', price: 160 },
      { name: 'Veg Hakka Noodles', price: 160 },
    ],
    'Mocktails': [
      { name: 'Classic Mojito', price: 110 },
      { name: 'Blue Lagoon', price: 110 },
      { name: 'Green Apple Mojito', price: 110 },
      { name: 'Strawberry Mojito', price: 110 },
      { name: 'Cranberry Mojito', price: 110 },
      { name: 'Lime Mojito', price: 110 },
    ],
    'Beverages': [
      { name: 'Cold Coffee', price: 110 },
      { name: 'KitKat Shake', price: 110 },
      { name: 'Oreo Shake', price: 110 },
      { name: 'Chocolate Shake', price: 110 },
      { name: 'Mango Shake', price: 110 },
      { name: 'Strawberry Shake', price: 110 },
      { name: 'Choco-Chip Shake', price: 110 },
    ],
    'Signature Burgers': [
      { name: 'Mexican Aloo Tikki Burger', price: 80 },
      { name: 'Tandoori Aloo Tikki Burger', price: 80 },
      { name: 'Veggie Cheese Burger', price: 90 },
      { name: 'Spicy Paneer Burger', price: 100 },
      { name: 'Cheesy Paneer Tikka Burger', price: 100 },
    ],
    'Sandwiches': [
      { name: 'Veg Masala Sandwich', price: 80 },
      { name: 'Veg Cheese Grill', price: 90 },
      { name: 'Veg Club Sandwich', price: 100 },
      { name: 'Cheese Chilli Sandwich', price: 90 },
      { name: 'Paneer Tikka Sandwich', price: 100 },
    ],
    'All Day Snacks': [
      { name: 'Fries', price: 80 },
      { name: 'Cheese Fries', price: 100 },
      { name: 'Peri Peri Fries', price: 100 },
      { name: 'Veg Nuggets (6 pcs)', price: 90 },
      { name: 'Cheese Balls (6 pcs)', price: 100 },
      { name: 'Chilli Cheese Nuggets', price: 90 },
    ]
  };

  const [cart, setCart] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [dineType, setDineType] = useState('dine');
  const [cartPulse, setCartPulse] = useState(false);
  const prevCartRef = useRef({});

  const addToCart = (item) => {
    const key = item.name;
    setCart((prev) => {
      const newCart = {
        ...prev,
        [key]: {
          ...item,
          quantity: prev[key] ? prev[key].quantity + 1 : 1,
        },
      };
      return newCart;
    });
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  const removeFromCart = (item) => {
    const key = item.name;
    setCart((prev) => {
      if (!prev[key]) return prev;
      const qty = prev[key].quantity - 1;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return {
        ...prev,
        [key]: {
          ...item,
          quantity: qty,
        },
      };
    });
  };

  const totalAmount = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || (!table && dineType === 'dine')) {
      alert('Please fill all mandatory fields.');
      return;
    }

    const orderTime = new Date().toLocaleString();
    const orderDetails = Object.values(cart)
      .map((item) => `${item.name} x${item.quantity} = ₹${item.price * item.quantity}`)
      .join('\n');

    const text = ` *New Order*\n\n Name: *${name}*\n Table: *${dineType === 'dine' ? table : 'Takeaway'}*\n Time: ${orderTime}\n\n${orderDetails}\n\n *Total*: ₹${totalAmount}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918141953822?text=${encoded}`, '_self');
    setCart({});
    setName('');
    setTable('');
    setShowCheckout(false);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Animation for cart changes
  useEffect(() => {
    const prevCart = prevCartRef.current;
    const newItems = Object.keys(cart).filter(key => !prevCart[key]);
    
    if (newItems.length > 0) {
      setCartPulse(true);
      setTimeout(() => setCartPulse(false), 300);
    }
    
    prevCartRef.current = cart;
  }, [cart]);

  return (
    <div className="app-container">
      <div className="app-header">
        Kafenity
      </div>

      {!showCheckout ? (
        <div className="menu-container">
          {categories.map((cat) => (
            <div key={cat.name} className="category-container">
              <div
                onClick={() => toggleCategory(cat.name)}
                className={`category-header ${expandedCategory === cat.name ? 'expanded' : ''}`}
              >
                {cat.name}
                <span className="category-icon">
                  {expandedCategory === cat.name ? '▲' : '▼'}
                </span>
              </div>

              <div 
                className={`category-content ${expandedCategory === cat.name ? 'open' : ''}`}
              >
                <div className="items-grid">
                  {items[cat.name].map((item) => (
                    <div key={item.name} className="item-card">
                      <div className="item-info">
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">₹{item.price}</div>
                      </div>
                      <div className="item-actions">
                        <button 
                          className="quantity-btn minus"
                          onClick={() => removeFromCart(item)}
                          disabled={!cart[item.name]}
                        >
                          -
                        </button>
                        <div className="item-quantity">
                          {cart[item.name]?.quantity || 0}
                        </div>
                        <button 
                          className="quantity-btn plus"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-header">
            <button 
              className="back-button"
              onClick={() => setShowCheckout(false)}
            >
              &larr; Back to Menu
            </button>
            <br/>
            <h2>Your Order</h2>
          </div>

          <div className="cart-items">
            {Object.values(cart).map((item) => (
              <div key={item.name} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </div>
                </div>
                <div className="cart-item-actions">
                  <button 
                    className="cart-btn minus"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                  <button 
                    className="cart-btn plus"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            {Object.keys(cart).length === 0 && (
              <div className="empty-cart">
                <div className="empty-icon">🛒</div>
                <p>Your cart is empty</p>
                <button 
                  className="browse-btn"
                  onClick={() => setShowCheckout(false)}
                >
                  Browse Menu
                </button>
              </div>
            )}
          </div>

          {Object.keys(cart).length > 0 && (
            <div className="checkout-form">
              <div className="form-group">
                <label>Name*</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  required 
                />
              </div>

              <div className="form-group">
                <label>Order Type</label>
                <div className="order-type">
                  <button
                    className={`type-btn ${dineType === 'dine' ? 'active' : ''}`}
                    onClick={() => setDineType('dine')}
                  >
                    Dine In
                  </button>
                  <button
                    className={`type-btn ${dineType === 'takeaway' ? 'active' : ''}`}
                    onClick={() => setDineType('takeaway')}
                  >
                    Takeaway
                  </button>
                </div>
              </div>

              {dineType === 'dine' && (
                <div className="form-group">
                  <label>Table No*</label>
                  <input 
                    type="text" 
                    value={table} 
                    onChange={(e) => setTable(e.target.value)}
                    className="form-input"
                    required 
                  />
                </div>
              )}
            </div>
          )}

          {Object.keys(cart).length > 0 && (
            <div className="order-summary">
              <div className="total-row">
                <span>Total:</span>
                <span className="total-amount">₹{totalAmount}</span>
              </div>
              <button 
                className="order-button"
                onClick={handleOrder}
              >
                ✅ Place Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      )}

      {!showCheckout && totalAmount > 0 && (
        <div 
          className={`cart-button ${cartPulse ? 'pulse' : ''}`}
          onClick={() => setShowCheckout(true)}
        >
          <div className="cart-icon">🛒</div>
          <div className="cart-text">Order Now</div>
          <div className="cart-total">₹{totalAmount}</div>
        </div>
      )}
    </div>
  );
}