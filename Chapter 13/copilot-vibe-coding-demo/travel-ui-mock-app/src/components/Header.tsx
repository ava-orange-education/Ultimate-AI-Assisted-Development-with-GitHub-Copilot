import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-xl font-bold">FUTURA</h1>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#">Company</a>
        <a href="#" className="text-orange-500 border-b-2 border-orange-500">Tickets</a>
        <a href="#">Events</a>
        <a href="#">Booking</a>
      </nav>
    </header>
  );
};

export default Header;
