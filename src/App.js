import { useState } from "react";
import "./App.css";

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
        <form className="todoform" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter your todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn" type="submit">
            {editId ? "Edit" : "Add"}
          </button>
        </form>
        <ul>
          {todos.map((t) => (
            <li className="list">
              <span className="firstlistchild" key={t.id}>
                {t.todo}
              </span>
              <span>
                <button className="btn" onClick={() => handleEdit(t.id)}>
                  Edit
                </button>
              </span>
              <span>
                <button className="btn" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
