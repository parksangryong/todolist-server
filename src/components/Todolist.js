import '../css/Todolist.css'
import TodoItem from './TodoItem'

// 할일 목록
function Todolist(props){
    const result = props.todolist.map(
        (data) => (<TodoItem key={data.num} num={data.num} todo={data.todo} 
            date={data.date} complete={data.complete}
            deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} completeTodo={props.completeTodo}/>)
    )

    return(
        <div id='todolist'>
            {result}
        </div>
    )
}

export default Todolist