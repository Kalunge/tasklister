import React from 'react';
import Button from './Button';

const Header = ({ name }) => {
  const onClick = () => {
    console.log('object');
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button onClick={onClick} color="green" text="Add" />
    </header>
  );
};

export default Header;
