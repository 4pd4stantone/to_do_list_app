
export default function List({toDoList, setTodoList}) {


        const listOfToDoItems = toDoList.map(task => (
            <div key={task} className="list">
                <input type="checkbox" name="done" value="done" />
                <div className='task-area'>{task}</div>
                <button>Edit</button>
                <button disabled={true}>Delete</button>
            </div>
        ))

    return (
        <section id='todolist-section' >
            <ul className="todolist" >{listOfToDoItems}</ul>
        </section>
    )

}

