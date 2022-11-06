import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState(""); //for single todo
  const [todos, setTodos] = useState([]); //for all the todos
  const [editId, setEditId] = useState(0);

  const handlesubmit = (event) => {
    event.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : {
              id: t.id,
              todo: t.todo,
            }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handlesubmit={handlesubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <p className="author">by lobnor</p>
    </div>
  );
}

export default App;
