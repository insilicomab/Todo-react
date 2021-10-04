export const InputTodo = (props) => {
  const { todoText, changeTodoText, addTodo } = props;
  return (
    <div className="input-area">
      <input
        placeholder="ToDoを入力"
        value={todoText}
        onChange={changeTodoText}
      />
      <button onClick={addTodo}>追加</button>
    </div>
  );
};
