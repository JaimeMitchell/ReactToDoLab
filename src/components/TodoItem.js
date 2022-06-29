const TodoItem = (props) => {
    const { TaskName, Description, Completed } = props.TodoData
    return (
        <div className="todolist">
            <br></br>
            <h2>{TaskName}</h2>
            <h3>{Description}</h3>
            <h4>{Completed+""}</h4>
        </div>
    )
}

export default TodoItem