import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるToDoは5個までです。</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <CompleteTodos
        completeTodos={completeTodos}
        backIncomplete={backIncomplete}
      />
    </>
  );
};
