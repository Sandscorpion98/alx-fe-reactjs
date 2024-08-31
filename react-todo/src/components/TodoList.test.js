import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import TodoList from './TodoList'; 

test('renders TodoList component with initial todos', () => {
  
  render(<TodoList />);
  
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Read about Hooks')).toBeInTheDocument();
  
  
  expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
  expect(screen.getByText('Add')).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });


  test('allows users to toggle a todo between completed and not completed', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    
    expect(todo).not.toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todo);
    
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todo);
    
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });
  

  test('allows users to delete a todo', () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText('Delete')[0];
    const todo = screen.getByText('Learn React');
    
    fireEvent.click(deleteButton);
    
    expect(todo).not.toBeInTheDocument();
  });
  