import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const changeTodoText = (e) => setTodoText(e.target.value);

  const addTodo = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; // スプレッド構文による配列の結合
    setIncompleteTodos(newTodos);
    setTodoText(""); // inputタグ内をリセット
  };

  const deleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); // indexを1つ削除
    setIncompleteTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); // indexを1つ削除
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const backIncomplete = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); // indexを1つ削除
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        changeTodoText={changeTodoText}
        addTodo={addTodo}
      />

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <div className="complete-area">
        <p className="title">完了したToDo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => backIncomplete(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
