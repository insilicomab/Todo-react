import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, completeTodo, deleteTodo } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => completeTodo(index)}>完了</button>
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
