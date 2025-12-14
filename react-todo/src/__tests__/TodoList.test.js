import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders initial todo', () => {
  render(<TodoList />);
  // Verify the sample todo is displayed
  expect(screen.getByText(/Sample Todo/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  // Type into the input
  fireEvent.change(screen.getByPlaceholderText(/Add todo/i), {
    target: { value: 'New Task' },
  });
  // Click the Add button
  fireEvent.click(screen.getByText(/Add/i));
  // Verify the new todo appears
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Sample Todo/i);
  // Click the todo to toggle completion
  fireEvent.click(todo);
  // Verify it has line-through style
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);
  // Click delete
  fireEvent.click(deleteButton);
  // Verify the todo is removed
  expect(screen.queryByText(/Sample Todo/i)).not.toBeInTheDocument();
});
