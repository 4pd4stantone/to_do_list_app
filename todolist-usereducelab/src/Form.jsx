import { useState } from 'react'
import List from './List'

export default function Form() {

    const [toDoList, setToDoList] = useState([])

    function handleAdd(formData) {
        const newToDoItem = formData.get("newTask");
        setToDoList(prev => [...prev, newToDoItem]);
        console.log(newToDoItem)
    }

  return (
    <>
        <main>
            <form action={handleAdd} className="add-section">
                    <input
                    className="add-input"
                    type="text"
                    aria-label="Add Task"
                    name="newTask"
                    placeholder="add new task"
                    />
                    <button className="add-btn">+ Add Task</button>
            </form>
            <List toDoList={toDoList} setToDoList={setToDoList} />
        </main>
        
    </>
  );
} 