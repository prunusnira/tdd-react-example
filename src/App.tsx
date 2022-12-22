import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './react-component/profile'
import Counter from './react-component/counter'
import TodoForm from './todo-tdd/todoForm'

function App() {
  return (
    <>
    <Profile username='me' name='test' />
    <Counter />
    <TodoForm />
    </>
  );
}

export default App;
