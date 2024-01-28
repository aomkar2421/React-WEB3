
const Todo = ({todo , addTodo}) => {
    console.log("child render");

  return (
    <div>
        <h2>My Todos</h2>
        {
            todo.map(( todo , index ) => {
                return <p key={index} > {todo} </p>
            })
        }
        <button onClick={addTodo} >Add Todo</button>
    </div>
  )
}

export default Todo