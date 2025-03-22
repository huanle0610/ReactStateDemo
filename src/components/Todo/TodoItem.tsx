import React from 'react';
import { Checkbox, Button } from 'antd';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)}>
        {todo.text}
      </Checkbox>
      <Button type="link" danger onClick={() => onRemove(todo.id)} style={{ marginLeft: '8px' }}>
        Remove
      </Button>
    </div>
  );
};

export default TodoItem;