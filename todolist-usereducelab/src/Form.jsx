import { useState } from 'react'


export default function Form() {

    const [toDoList, setToDoList] = useState([])

    function handleAdd(formData) {
        const newToDoItem = formData.get("newTask");
        setToDoList(prev => [...prev, newToDoItem]);
        console.log(newToDoItem)
    }

    const listOfToDoItems = toDoList.map(task => (
        <div key={task} className="list">
            <input type="checkbox" name="done" value="done" />
            <div className='task-area'>{task}</div>
            <button>Edit</button>
            <button disabled={true}>Delete</button>
        </div>
    ))

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
        </main>
        <section id='todolist-section' >
                <ul className="todolist" >{listOfToDoItems}</ul>
        </section>
    </>
  );
} 