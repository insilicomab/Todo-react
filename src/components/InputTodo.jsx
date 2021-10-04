const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, changeTodoText, addTodo, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={changeTodoText}
      />
      <button disabled={disabled} onClick={addTodo}>
        追加
      </button>
    </div>
  );
};
