import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

function App() {
  return (
    <>
      <div className="car-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>Nº Tareas: 4</h3>
          <h3>Pendientes: 3</h3>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
