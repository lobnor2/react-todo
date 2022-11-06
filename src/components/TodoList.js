import React from "react";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <>
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
    </>
  );
};

export default TodoList;
