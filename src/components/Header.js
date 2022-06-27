import React from 'react';
import Button from './Button';

const Header = ({ toggleForm, showAddTask }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        onClick={toggleForm}
        color={showAddTask ? 'red' : 'green'}
        text={showAddTask ? 'close' : 'add'}
      />
    </header>
  );
};

export default Header;
