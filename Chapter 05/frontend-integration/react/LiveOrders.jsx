// Prompt Used: Create a React component that subscribes to a WebSocket and displays live incoming orders

import React, { useEffect, useState } from "react";

const LiveOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/orders");

    socket.onmessage = (event) => {
      const newOrder = JSON.parse(event.data);
      setOrders((prevOrders) => [...prevOrders, newOrder]);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => socket.close();
  }, []);

  return (
    <div>
      <h2>Live Orders</h2>
      <ul>
        {orders.map((order, idx) => (
          <li key={idx}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveOrders;
