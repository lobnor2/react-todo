import React from "react";

const TodoForm = ({ handlesubmit, todo, editId, setTodo }) => {
  return (
    <>
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
    </>
  );
};

export default TodoForm;
