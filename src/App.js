import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const menuData = {
  categories: [
    { name: 'Shots & Special Drinks' },
    { name: 'Mocktails' },
    { name: 'Milkshakes & Cold Coffee' },
    { name: 'Tea & Coffee' },
    { name: 'Snacks' },
    { name: 'South Indian' },
    { name: 'Chinese' },
    { name: 'Fast Foods' },
    { name: 'Soups' },
    { name: 'Tandoor Se' },
    { name: 'Indian Main Course' },
    { name: 'Indian Breads' },
    { name: 'Rice & Dal Preparations' },
    { name: 'Accompaniments' },
    { name: 'Desserts' }
  ],
  items: {
    'Shots & Special Drinks': [
      { name: 'Kokum Shot', price: 60 },
      { name: 'Chilli Shot', price: 60 }
    ],
    'Mocktails': [
      { name: 'Blue Lagoon', price: 110 },
      { 
        name: 'Mojito',
        variants: [
          { type: 'Mint', price: 110 },
          { type: 'Peach', price: 110 },
          { type: 'Strawberry', price: 110 }
        ]
      },
      { name: 'Pink Passion', price: 200 },
      { name: 'Fruit Punch', price: 150 },
      { name: 'Pina Colada', price: 150 },
      { name: 'Berry Frosty', price: 150 },
      { name: 'Purple Cow', price: 150 },
      { name: 'Mai Tai', price: 180 },
      { name: 'Moon on the Lake', price: 120 },
      { name: 'Blueberry Lemonade', price: 180 },
      { name: 'Strawberry Lemonade', price: 180 },
      { name: 'Coconut Minty Soda', price: 150 },
      { name: 'Minty Café Latte', price: 180 },
      { name: 'Black Honey Orange Iced Café', price: 150 },
      { name: 'Pink Guava Strawberry Fizz', price: 180 }
    ],
    'Milkshakes & Cold Coffee': [
      { 
        name: 'Milk Shakes',
        variants: [
          { type: 'Vanilla', price: 170 },
          { type: 'Chocolate', price: 170 },
          { type: 'Strawberry', price: 170 },
          { type: 'Oreo', price: 170 }
        ]
      },
      { 
        name: 'Thick Shakes',
        variants: [
          { type: 'Vanilla', price: 250 },
          { type: 'Chocolate', price: 250 },
          { type: 'Oreo', price: 250 }
        ]
      },
      { 
        name: 'Cold Coffee',
        variants: [
          { type: 'Vanilla', price: 170 },
          { type: 'Hazelnut', price: 170 },
          { type: 'Caramel', price: 170 },
          { type: 'Irish', price: 170 },
          { type: 'Chocolate', price: 170 }
        ]
      }
    ],
    'Tea & Coffee': [
      { name: 'Traditional Tea', price: 50 },
      { name: 'Cardamom Tea', price: 60 },
      { name: 'Ginger Pudina Tea', price: 60 },
      { name: 'Lemon Grass Tea', price: 50 },
      { name: 'Zafran Tea', price: 80 },
      { name: 'Black Tea', price: 50 },
      { name: 'Kahwa', price: 60 },
      { name: 'Green Tea', price: 60 },
      { name: 'Ginger Honey Green Tea', price: 60 },
      { name: 'Hot Plain Milk', price: 50 },
      { name: 'Black Coffee', price: 60 },
      { name: 'Café Latte', price: 100 },
      { name: 'Classic Hot Coffee', price: 60 },
      { name: 'Cappuccino', price: 80 },
      { 
        name: 'Hot Coffee',
        variants: [
          { type: 'Vanilla', price: 100 },
          { type: 'Hazelnut', price: 100 },
          { type: 'Caramel', price: 100 },
          { type: 'Irish', price: 100 }
        ]
      },
      { name: 'Café Mocha', price: 110 },
      { name: 'Bournvita/Hot Chocolate', price: 80 }
    ],
    'Snacks': [
      { name: 'Thepla (3 Nos.)', price: 60 },
      { name: 'Pav Patrice (2 Nos.)', price: 110 },
      { name: 'Bread Pakora (2 Nos.)', price: 60 },
      { name: 'Sindhi Bhakhti Koki', price: 130 },
      { name: 'Maggie', price: 70 },
      { name: 'Veg. Maggie', price: 100 },
      { name: 'Nachos', price: 150 },
      { name: 'Cheese Nachos', price: 180 },
      { name: 'Dhakad Paratha', price: 250 },
      { name: 'Dabell', price: 50 },
      { name: 'Vadapav', price: 60 },
      { name: 'Cheese Vadapav', price: 60 },
      { name: 'Masala Pav', price: 120 },
      { name: 'Cheese Masala Pav', price: 150 },
      { name: 'Veg. Frankie', price: 120 },
      { name: 'Cheese Frankie', price: 150 },
      { 
        name: 'Maska Bun',
        variants: [
          { type: 'Jam', price: 80 },
          { type: 'Plain', price: 80 },
          { type: 'Chocolate', price: 80 }
        ]
      },
      { name: 'Pani Puri', price: 50 },
      { name: 'Jhal Muri', price: 100 },
      { name: 'Sev Puri', price: 70 },
      { name: 'Dahi Puri', price: 80 },
      { name: 'Aloo Tikki Chaat', price: 150 },
      { name: 'Basket Chaat', price: 100 },
      { name: 'Italian Basket Chaat', price: 120 },
      { name: 'Chhole Bhature', price: 170 },
      { name: 'Poori Bhaji', price: 120 },
      { name: 'Pav Bhaji', price: 120 }
    ],
    'South Indian': [
      { 
        name: 'Plain Dosa',
        variants: [
          { type: 'Crispy', price: 90 },
          { type: 'Medium', price: 90 },
          { type: 'Regular', price: 90 }
        ]
      },
      { 
        name: 'Plain Paper Dosa',
        variants: [
          { type: 'Crispy', price: 150 },
          { type: 'Medium', price: 150 },
          { type: 'Regular', price: 150 }
        ]
      },
      { 
        name: 'Masala Dosa',
        variants: [
          { type: 'Crispy', price: 140 },
          { type: 'Medium', price: 140 },
          { type: 'Regular', price: 140 }
        ]
      },
      { 
        name: 'Garlic Plain Dosa',
        variants: [
          { type: 'Crispy', price: 100 },
          { type: 'Medium', price: 100 },
          { type: 'Regular', price: 100 }
        ]
      },
      { 
        name: 'Garlic Masala Dosa',
        variants: [
          { type: 'Crispy', price: 130 },
          { type: 'Medium', price: 130 },
          { type: 'Regular', price: 130 }
        ]
      },
      { 
        name: 'Plain Cheese Dosa',
        variants: [
          { type: 'Crispy', price: 110 },
          { type: 'Medium', price: 110 },
          { type: 'Regular', price: 110 }
        ]
      },
      { 
        name: 'Cheese Masala Dosa',
        variants: [
          { type: 'Crispy', price: 150 },
          { type: 'Medium', price: 150 },
          { type: 'Regular', price: 150 }
        ]
      },
      { 
        name: 'Mysore Masala Dosa',
        variants: [
          { type: 'Crispy', price: 130 },
          { type: 'Medium', price: 130 },
          { type: 'Regular', price: 130 }
        ]
      },
      { name: 'Podi Idli', price: 100 },
      { name: 'Chee Idli', price: 120 },
      { 
        name: 'Rava Sada Dosa',
        variants: [
          { type: 'Crispy', price: 100 },
          { type: 'Medium', price: 100 },
          { type: 'Regular', price: 100 }
        ]
      },
      { 
        name: 'Rava Masala Dosa',
        variants: [
          { type: 'Crispy', price: 130 },
          { type: 'Medium', price: 130 },
          { type: 'Regular', price: 130 }
        ]
      },
      { 
        name: 'Rava Mysore Masala Dosa',
        variants: [
          { type: 'Crispy', price: 150 },
          { type: 'Medium', price: 150 },
          { type: 'Regular', price: 150 }
        ]
      },
      { name: 'Uttapam', price: 120 },
      { name: 'Tomato Onion Uttapam', price: 150 },
      { name: 'Mix Uttapam', price: 180 },
      { 
        name: 'Podi Cheese Dosa',
        variants: [
          { type: 'Crispy', price: 200 },
          { type: 'Medium', price: 200 },
          { type: 'Regular', price: 200 }
        ]
      }
    ],
    'Chinese': [
      { name: 'Dragon Potato', price: 150 },
      { name: 'Paneer Chilli Dry', price: 200 },
      { name: 'Paneer 65', price: 210 },
      { 
        name: 'Manchurian',
        variants: [
          { type: 'Dry', price: 150 },
          { type: 'Gravy', price: 150 }
        ]
      },
      { name: 'American Chop Suey', price: 160 },
      { name: 'Chinese Chop Suey', price: 160 },
      { name: 'Chowmein', price: 180 },
      { name: 'Chinese Bhel', price: 170 },
      { name: 'Spring Roll (2 nos.)', price: 240 },
      { name: 'Crispy Veg.', price: 180 },
      { name: 'Veg. Fried Rice', price: 150 },
      { name: 'Schezwan Fried Rice', price: 170 },
      { name: 'Manchurian Fried Rice', price: 170 },
      { name: 'Singapore Fried Rice', price: 170 },
      { name: 'Hakka Noodles', price: 150 },
      { name: 'Schezwan Noodles', price: 170 },
      { name: 'Manchurian Noodles', price: 170 },
      { name: 'Singapore Noodles', price: 170 },
      { name: 'Paneer Manchurian Dry', price: 180 },
      { name: 'Alfredo Pasta', price: 200 },
      { name: 'Arrabiata Pasta', price: 200 },
      { name: 'Mornay Pasta', price: 220 },
      { name: 'Pesto Pasta', price: 220 }
    ],
    'Fast Foods': [
      { 
        name: 'French Fries',
        variants: [
          { type: 'Salted', price: 80 },
          { type: 'Peri-Peri', price: 100 }
        ]
      },
      { name: 'Bread Butter', price: 70 },
      { name: 'Bread Butter Jam', price: 90 },
      { name: 'Veg. Sandwich', price: 100 },
      { name: 'Cheese Sandwich', price: 130 },
      { name: 'Veg. Cheese Sandwich', price: 140 },
      { name: 'Mexican Sandwich', price: 170 },
      { name: 'Tandoori Paneer Sandwich', price: 170 },
      { name: 'Cheese Chilli Sandwich', price: 150 },
      { name: 'Cheese Corn Sandwich', price: 150 },
      { name: 'Aloo Mutter Sandwich', price: 120 },
      { name: 'Club Sandwich', price: 200 },
      { name: 'Nutella Chocolate Sandwich', price: 180 },
      { name: 'Cheese Pineapple Sandwich', price: 180 },
      { name: 'Veg. Burger', price: 90 },
      { name: 'Cheese Burger', price: 120 },
      { name: 'Mexican Burger', price: 150 },
      { name: 'Margherita Pizza', price: 120 },
      { name: 'Country Feast Pizza', price: 150 },
      { name: 'Tandoori Paneer Pizza', price: 180 },
      { name: 'Veg. Cheesy Loaded Pizza', price: 350 },
      { name: 'Jalapeno Pineapple Pizza', price: 150 },
      { name: 'Mexican Pizza', price: 180 },
      { name: 'Plain Garlic Bread', price: 80 },
      { name: 'Cheesy Garlic Bread', price: 110 },
      { name: 'Cheesy Garlic Bread Supreme', price: 130 },
      { name: 'Cheese Garlic Pull Apart Bread', price: 180 },
      { name: 'Sub Tub', price: 180 }
    ],
    'Soups': [
      { name: 'Cream of Tomato Soup', price: 150 },
      { name: 'Manchurian Soup', price: 130 },
      { name: 'Manchow Soup', price: 130 },
      { name: 'Hot & Sour Soup', price: 140 },
      { name: 'Veg. Clear Soup', price: 150 },
      { name: 'Lemon Coriander Soup', price: 170 },
      { name: 'Garlic Coriander Soup', price: 170 },
      { name: 'Cream of Spinach Soup', price: 170 },
      { name: 'Sweet Corn Soup', price: 170 }
    ],
    'Tandoor Se': [
      { name: 'Paneer Tikka Dry', price: 350 },
      { name: 'Paneer Hariyali Tikka', price: 350 },
      { name: 'Paneer Malai Tikka', price: 380 },
      { name: 'Reshmi Tikka', price: 380 },
      { name: 'Paneer Achari Tikka', price: 350 },
      { name: 'Aloo Achari Tikka', price: 210 },
      { name: 'Harabhara Kebab', price: 210 },
      { name: 'Banjara Kebab', price: 400 },
      { name: 'Dahi ke Sholey', price: 350 },
      { name: 'Veg. Sheekh Kebab', price: 240 }
    ],
    'Indian Main Course': [
      { name: 'Mix Veg.', price: 250 },
      { name: 'Veg. Toofani', price: 250 },
      { name: 'Veg. Makhanwala', price: 260 },
      { name: 'Veg. Handi', price: 260 },
      { name: 'Veg. Jaipuri', price: 270 },
      { name: 'Veg. Kadai', price: 270 },
      { name: 'Veg. Kolhapuri', price: 290 },
      { name: 'Veg. Angara', price: 290 },
      { name: 'Paneer Tikka Masala', price: 330 },
      { name: 'Paneer Butter Masala', price: 350 },
      { name: 'Paneer Handi', price: 350 },
      { name: 'Paneer Kadai', price: 350 },
      { name: 'Paneer Toofani', price: 350 },
      { name: 'Paneer Patiyala', price: 350 },
      { name: 'Paneer Bhurji', price: 350 },
      { name: 'Paneer Angara', price: 380 },
      { name: 'Paneer Pasanda', price: 380 },
      { name: 'Paneer Lawabdar', price: 380 },
      { name: 'Palak Paneer', price: 380 },
      { name: 'Cheese Angoori', price: 380 },
      { name: 'Cheese Butter Masala', price: 400 },
      { name: 'Kaju Curry', price: 400 },
      { name: 'Kaju Butter Masala', price: 400 },
      { name: 'Kafenity Special', price: 440 }
    ],
    'Indian Breads': [
      { name: 'Plain Roti', price: 30 },
      { name: 'Butter Roti', price: 40 },
      { name: 'Plain Naan', price: 40 },
      { name: 'Butter Naan', price: 50 },
      { name: 'Garlic Naan', price: 90 },
      { name: 'Cheese Naan', price: 110 },
      { name: 'Cheese Garlic Naan', price: 130 },
      { name: 'Plain Kulcha', price: 50 },
      { name: 'Butter Kulcha', price: 60 },
      { name: 'Dhaba Roti', price: 60 },
      { name: 'Lachha Paratha', price: 50 },
      { name: 'Missi Roti', price: 50 },
      { name: 'Paneer Paratha', price: 150 },
      { 
        name: 'Stuffed Paratha',
        variants: [
          { type: 'Aloo', price: 110 },
          { type: 'Gobi', price: 110 }
        ]
      },
      { name: 'Cheese Chilli Paratha', price: 200 },
      { name: 'Aloo Cheese Paratha', price: 150 }
    ],
    'Rice & Dal Preparations': [
      { name: 'Steam Rice', price: 120 },
      { name: 'Jeera Rice', price: 150 },
      { name: 'Bhaji Pulao', price: 150 },
      { name: 'Chhole Rice', price: 150 },
      { name: 'Veg. Pulao', price: 170 },
      { name: 'Veg. Biryani', price: 170 },
      { name: 'Hyderabadi Biryani', price: 180 },
      { name: 'Dum Biryani', price: 220 },
      { name: 'Dal Fry', price: 150 },
      { name: 'Dal Palak', price: 180 },
      { name: 'Dal Tadka', price: 180 },
      { name: 'Dhaba Dal', price: 200 },
      { name: 'Dal Makhni', price: 220 },
      { name: 'Dal Khichdi', price: 120 },
      { name: 'Vegetable Khichdi', price: 140 },
      { name: 'Dal Makhni Khichdi', price: 150 },
      { name: 'Dal Palak Khichdi', price: 150 },
      { name: 'Gujrati Khichdi', price: 100 },
      { name: 'Hare Pyaz aur Lehsun Ki Khichdi', price: 150 },
      { name: 'Paneer Makhni Khichdi', price: 200 }
    ],
    'Accompaniments': [
      { name: 'Plain Chhas', price: 50 },
      { name: 'Masala Chhas', price: 60 },
      { name: 'Salted Lassi', price: 90 },
      { name: 'Sweet Lassi', price: 100 },
      { 
        name: 'Flavoured Lassi',
        variants: [
          { type: 'Mango', price: 140 },
          { type: 'Strawberry', price: 140 },
          { type: 'Pineapple', price: 140 },
          { type: 'Rose', price: 140 },
          { type: 'Blueberry', price: 140 },
          { type: 'Rajwadi', price: 140 }
        ]
      },
      { 
        name: 'Papad',
        variants: [
          { type: 'Roasted', price: 30 },
          { type: 'Fried', price: 30 }
        ]
      },
      { name: 'Masala Papad', price: 70 },
      { name: 'Green Salad', price: 90 },
      { name: 'Kachumbar Salad', price: 80 },
      { name: 'Cucumber Tomato Salad', price: 50 },
      { name: 'Extra Pav (2 Nos.)', price: 30 },
      { name: 'Extra Bhature', price: 50 },
      { name: 'Extra Chhole', price: 100 },
      { name: 'Extra Cheese', price: 50 },
      { name: 'Extra Ghee', price: 60 },
      { name: 'Extra Curd', price: 40 }
    ],
    'Desserts': [
      { name: 'Evergreen Brownie', price: 120 },
      { name: 'Rich Dry Fruits Brownie', price: 180 },
      { name: 'Walnut Fudge Brownie', price: 180 },
      { name: 'All in Chocolate Brownie', price: 200 },
      { name: 'Burj Khalifa Brownie', price: 333 },
      { name: 'Kafenity Special Brownie', price: 444 }
    ]
  }
};

  const [cart, setCart] = useState({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [dineType, setDineType] = useState('dine');
  const [cartPulse, setCartPulse] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [isJain, setIsJain] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(true);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowAllCategories(true);
      return;
    }

    const results = [];
    Object.keys(menuData.items).forEach(category => {
      menuData.items[category].forEach(item => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            ...item,
            category
          });
        }
      });
    });

    setSearchResults(results);
    setShowAllCategories(false);
  }, [searchQuery]);

  // Handle scroll to show search bar - only when not in checkout
  useEffect(() => {
    if (showCheckout) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCheckout]);

  // Cart functions
  const addToCart = (item, variantType = 'Regular') => {
    const price = item.variants ? 
      item.variants.find(v => v.type === variantType).price : 
      item.price;
    
    const key = item.variants ? 
      `${item.name} - ${variantType}` : 
      item.name;

    setCart(prev => ({
      ...prev,
      [key]: {
        ...item,
        price,
        quantity: prev[key] ? prev[key].quantity + 1 : 1,
        variantType: item.variants ? variantType : null
      }
    }));
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  const removeFromCart = (itemKey) => {
    setCart(prev => {
      if (!prev[itemKey]) return prev;
      const qty = prev[itemKey].quantity - 1;
      if (qty <= 0) {
        const { [itemKey]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [itemKey]: {
          ...prev[itemKey],
          quantity: qty
        }
      };
    });
  };

  const totalAmount = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  // Order handling
  const handleOrder = () => {
    if (!name || (!table && dineType === 'dine')) {
      alert('Please fill all mandatory fields.');
      return;
    }

    const orderTime = new Date().toLocaleString();
    const orderDetails = Object.values(cart)
      .map(item => `${item.name}${item.variantType ? ` (${item.variantType})` : ''} x${item.quantity} = ₹${item.price * item.quantity}`)
      .join('\n');

    const specialRequests = [
      isJain && '🟢 JAIN ORDER',
      instructions && `📝 Cooking Instructions: ${instructions}`
    ].filter(Boolean).join('\n');

    const text = `*New Order*\n\nName: *${name}*\nTable: *${dineType === 'dine' ? table : 'Takeaway'}*\nTime: ${orderTime}\n\n${orderDetails}\n\n${specialRequests}\n*Total*: ₹${totalAmount}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918141953822?text=${encoded}`, '_self');
    
    // Reset form
    setCart({});
    setName('');
    setTable('');
    setShowCheckout(false);
    setInstructions('');
    setIsJain(false);
  };

  // UI helpers
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleVariantChange = (itemName, variantType) => {
    setSelectedVariants(prev => ({
      ...prev,
      [itemName]: variantType
    }));
  };

  const renderItemCard = (item, category) => {
    const itemKey = item.variants ? 
      `${item.name} - ${selectedVariants[item.name] || 'Regular'}` : 
      item.name;
      
    return (
      <div key={item.name} className="item-card">
        <div className="item-info">
          <div className="item-name">{item.name}</div>
          {item.variants ? (
            <div className="variant-selector">
              <select
                onChange={(e) => handleVariantChange(item.name, e.target.value)}
                className="variant-dropdown"
                value={selectedVariants[item.name] || 'Regular'}
              >
                {item.variants.map(variant => (
                  <option key={variant.type} value={variant.type}>
                    {variant.type} - ₹{variant.price}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="item-price">₹{item.price}</div>
          )}
        </div>
        <div className="item-actions">
          <button 
            className="quantity-btn minus"
            onClick={() => removeFromCart(itemKey)}
            disabled={!cart[itemKey]}
          >
            -
          </button>
          <div className="item-quantity">{cart[itemKey]?.quantity || 0}</div>
          <button 
            className="quantity-btn plus"
            onClick={() => addToCart(
              item, 
              item.variants ? (selectedVariants[item.name] || 'Regular') : null
            )}
          >
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Header with search - only show when not in checkout */}
      {!showCheckout && (
        <div className={`app-header`}>
          <div className="header-content">
            {!showSearch && searchQuery === '' ? (
              <>
                <img src="logo192.png" alt="Restaurant Logo" className="header-logo" />
                <h1>Kafenituuuu</h1>
              </>
            ) : (
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    className="clear-search"
                    onClick={() => {
                      setSearchQuery('');
                      setShowSearch(false);
                    }}
                  >
                    
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main content area */}
      {!showCheckout ? (
        <div className="menu-container">
          {/* Search results view */}
          {searchQuery && searchResults.length > 0 && !showAllCategories ? (
            <div className="search-results-container">
              <h3>Search Results</h3>
              <div className="items-grid">
                {searchResults.map(item => renderItemCard(item, item.category))}
              </div>
              <button 
                className="show-all-btn"
                onClick={() => {
                  setSearchQuery('');
                  setShowAllCategories(true);
                }}
              >
                Show All Categories
              </button>
            </div>
          ) : (
            /* Normal categories view */
            menuData.categories.map(category => (
              <div key={category.name} className="category-container">
                <div
                  onClick={() => toggleCategory(category.name)}
                  className={`category-header ${expandedCategory === category.name ? 'expanded' : ''}`}
                >
                  {category.name}
                  <span className="category-icon">
                    {expandedCategory === category.name ? '▲' : '▼'}
                  </span>
                </div>

                <div className={`category-content ${expandedCategory === category.name ? 'open' : ''}`}>
                  <div className="items-grid">
                    {menuData.items[category.name]?.map(item => (
                      renderItemCard(item, category.name)
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        /* Checkout view */
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
            {Object.values(cart).length > 0 ? (
              Object.values(cart).map(item => (
                <div key={item.name + (item.variantType || '')} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-name">
                      {item.name}{item.variantType && ` (${item.variantType})`}
                    </div>
                    <div className="cart-item-price">
                      ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <button 
                      className="cart-btn minus"
                      onClick={() => removeFromCart(
                        item.variantType ? 
                          `${item.name} - ${item.variantType}` : 
                          item.name
                      )}
                    >
                      -
                    </button>
                    <button 
                      className="cart-btn plus"
                      onClick={() => addToCart(item, item.variantType || 'Regular')}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
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

          {Object.values(cart).length > 0 && (
            <>
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

                <div className="form-group">
                  <label>Cooking Instructions</label>
                  <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    className="form-input"
                    placeholder="Any special instructions..."
                    rows="3"
                  />
                </div>

                <div className="form-group toggle-group">
                  <label>Jain Preparation</label>
                  <div 
                    className={`jain-toggle ${isJain ? 'active' : ''}`}
                    onClick={() => setIsJain(!isJain)}
                  >
                    <div className="toggle-slider"></div>
                    <span className="toggle-text">{isJain ? 'ON' : 'OFF'}</span>
                  </div>
                </div>
              </div>

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
            </>
          )}
        </div>
      )}

      {/* Floating cart button */}
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
