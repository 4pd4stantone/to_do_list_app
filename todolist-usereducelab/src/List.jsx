import { useState } from 'react'

export default function List({toDoList, setTodoList}) {

        const [taskCompleted, setTaskCompleted] = useState(true)

        function handleCheckBox(e) {
            setTaskCompleted(!taskCompleted);
            console.log(taskCompleted)
        }

    return (
        <section id='todolist-section' >
            <ul className="todolist" >
                {toDoList.map(task => (
                        <div key={task} className="list">
                            <input type="checkbox" name="checkbox" onChange={handleCheckBox}/>
                            <div className='task-area'>{task}</div>
                            <button>Edit</button>
                            <button disabled={taskCompleted}>Delete</button>
                        </div>
                    ))
                }
            </ul>
        </section>
    )

}

