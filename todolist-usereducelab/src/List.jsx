export default function List({toDoList, setToDoList}) {

        function handleCheckBox(toDoItem) {
            setToDoList(prev => 
                prev.map(task => task.toDoItem === toDoItem ? {...task, completed: !task.completed} : task)
            )
        }
        function handleEdit(toDoItem) {
            setToDoList(prev =>
                prev.map(task => task.toDoItem === toDoItem ? {...task, isEditing: true } : task
                )
            )
        }
        function handleSave(toDoItem) {
            setToDoList(prev => prev.map(task => task.toDoItem === toDoItem ? {...task, isEditing: false} : task

            ))
        }
        function handleInputEdit(e, toDoItem) {
            const newToDoItem = e.target.value;
            setToDoList(prev => prev.map(task => task.toDoItem === toDoItem ? {...task, toDoItem: newToDoItem} : task))
        }

    return (
        <section id='todolist-section' >
            <ul className="todolist" >
                {toDoList.map(task => (
                        <div key={task.id} className="list">
                            {!task.isEditing ? 
                            <>
                                <input type="checkbox" name="checkbox" onChange={() => handleCheckBox(task.toDoItem)} />
                                <div className='task-area'>{task.toDoItem}</div>
                                <button onClick={() => handleEdit(task.toDoItem)}>Edit</button>
                                <button disabled={!task.completed}>Delete</button>
                            </> :
                            <>
                                <input type="checkbox" name="checkbox" disabled/>
                                <input type="text" className='task-area' value={task.toDoItem} onChange={(e) => handleInputEdit(e, task.toDoItem)}/>
                                <button onClick={() => handleSave(task.toDoItem)}>Save</button>
                            </> 
                            }
                            
                        </div>
                    ))
                }
            </ul>
        </section>
    )

}

