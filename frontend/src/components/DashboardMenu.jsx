import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardMenu = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (route) => {
    navigate(route);
    setActiveButton(route);
  };

  return (
    <div className='h-8 w-full font-semibold px-4 dark:text-white transition-all duration-500 border-b-2 border-b-blue-500 dark:border-b-green-600'>
      <button
        className={`mr-2 h-8 ${activeButton === '/dashboard/users' ? ' focus:bg-blue-500 focus:text-white' : ''} dark:focus:bg-green-600 dark:hover:bg-green-600 px-3 rounded-t-lg transition-all duration-500`}
        onClick={() => handleButtonClick('/dashboard/users')}
      >
        Users
      </button>
      <button
        className={`mr-2 h-8 ${activeButton === '/dashboard/transactions' ? 'focus:bg-blue-500 focus:text-white' : ''} dark:focus:bg-green-600 dark:hover:bg-green-600 px-3 rounded-t-lg transition-all duration-500`}
        onClick={() => handleButtonClick('/dashboard/transactions')}
      >
        Transactions
      </button>
    </div>
  );
};

export default DashboardMenu;
