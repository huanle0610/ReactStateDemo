import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface AddTodoFormProps {
  addTodo: (todo: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Trigger addTodo on Enter key press
        placeholder="Add a new todo"
        style={{ width: '300px', marginRight: '8px' }}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodoForm;
