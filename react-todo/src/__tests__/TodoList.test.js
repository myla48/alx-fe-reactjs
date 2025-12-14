import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders initial todo', () => {
  render(<TodoList />);
  expect(screen.getByText(/Sample Todo/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add todo/i), {
    target: { value: 'New Task' },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Sample Todo/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Sample Todo/i)).not.toBeInTheDocument();
});
