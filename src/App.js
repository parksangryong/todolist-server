import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'

function App() {
  const [todolist, setTodolist] = useState([])
  const [ale, setAle] = useState('')

  useEffect(
    () => {
      getTodo();
    }, [ale])

  const getTodo = async() => {
    const result = await axios.get('/todo');
    setTodolist(result.data);
    //console.log(todolist);
  }

  const checkTodo = async(tf) => {
    const result = await axios.get('/todo/' + tf);
    setTodolist(result.data);
  }

  const addTodo = async (intodo) => {
    if(todolist.length == 0){
      var numA = 1
    }
    else{
      var leng = todolist.length
      var numA = todolist[leng-1].num + 1;
    }
   
    const days = dayjs(new Date()).format('YYYY-MM-DD');

    const todoObj = {num: numA, todo: intodo, date: days}
    //console.log(todoObj)

    const result = await axios.post('/todo', todoObj);
    setAle(result)
  }

  const deleteTodo = async (num) => {
    //console.log('app del')
    //console.log(num)
    const result = await axios.delete('/todo', {data : {num}})
    setAle(result)
  }

  const updateTodo = async (num, mtodo, mdate) => {
    //console.log('app up')
    //console.log(mtodo, mdate)\\

    const days = mdate.substr(0,10)
    const todoObj = {num: num, todo: mtodo, date: days}
    //console.log(todoObj)

    const result = await axios.put('/todo', todoObj)
    setAle(result)
  }

  const deleteAll = async () => {
    const result = await axios.delete('/todoall')
    setAle(result)
  }
  const clearAll = async () => {
    const result = await axios.put('/todoall')
    setAle(result)
  }
  const declearAll = async () => {
    const result = await axios.put('/todoallx')
    setAle(result)
  }

  const completeTodo = async(num, completestate) => {
    //console.log('com')

    const todoObj = {num: num, complete : completestate}
    //console.log(todoObj)

    const result = await axios.put('/todocom', todoObj)
    setAle(result)
  }

  return (
    <div id="App">
      <div id='wrap'>
        <Header todolist={todolist} />
        <TodoInput addTodo={addTodo} checkTodo={checkTodo} getTodo={getTodo} />
        <Todolist todolist={todolist} deleteTodo={deleteTodo} updateTodo={updateTodo} completeTodo={completeTodo}  />
        <Footer ale={ale} deleteAll={deleteAll} clearAll={clearAll} declearAll={declearAll} />
      </div>
    </div>
  );
}

export default App;
