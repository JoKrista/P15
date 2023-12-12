import './App.css';
// App.js
import React from 'react';
import ArticleCard from './components/ArticleCard';
import Header from './components/Header';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  return (
    <div>
      <Header />
      <ToggleSwitch />
      <ArticleCard
        image="images/todolist.PNG"
        title="To Do List"
        description="As the title suggests, this is a program that makes a to-do list."
        githubLink="https://github.com/JoKrista/ToDoList.git"
      />
      {/* Add more ArticleCard components as needed */}
    </div>
  );
}

export default App;

