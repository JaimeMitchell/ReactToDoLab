import TodoItem from './TodoItem'

const TodoList = (props) => {
    return (
        <div className='todoitem'>
            <h1>Todos:</h1>
            {props.TodoData.map((i, index) => <TodoItem TodoData={i} key={index} />)}
        </div>)
}

export default TodoList