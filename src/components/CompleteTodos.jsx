export const CompleteTodos = (props) => {
  const { completeTodos, backIncomplete } = props;
  return (
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
  );
};
