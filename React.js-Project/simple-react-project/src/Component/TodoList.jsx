import React, { useState } from 'react'

const TodoList = () => {
    const [todo, settodo] = useState([])
    const [inputvalue, setinputvalue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputvalue.trim()){
            settodo([...todo, inputvalue])
            setinputvalue("")
        }
    }
    const handleOne = () => {
       settodo(todo.filter((d) => d !== d))
    }
  return (
    <div>
        <h1>Simple Todo list</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputvalue}  onChange={(e) => setinputvalue(e.target.value)}/>
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
            {
                todo.map((todo, index) => {
                    return (
                        <li key={index}>{todo}
                        <button onClick={handleOne}>X</button></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TodoList