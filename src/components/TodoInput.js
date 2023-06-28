import { useState } from 'react'
import '../css/TodoInput.css'

//할일 입력 + / 할일만 띄우기, 완료만 띄우기
function TodoInput(props){
    const [intodo, setIntodo] = useState('')
    
    const addTodo = () => {
        props.addTodo(intodo);
        setIntodo('');
    }
    const checkTodo = (tf) => {
        props.checkTodo(tf);
    }

    const todoChange = (e) => {
        //console.log(e.target.value)
        setIntodo(e.target.value)
    }

    return(
        <div id='todo-input'>
            <div className='inputs'>
                <input type='text' onChange={todoChange} value={intodo} />
                <button onClick={addTodo}>+</button>
            </div>
            <div className='buttons'>
                <button onClick={() => checkTodo(0)}>할일만</button>
                <button onClick={() => checkTodo(1)}>완료만</button>
                <button onClick={() => props.getTodo()}>전체</button>
            </div>
        </div>
    )
}

export default TodoInput