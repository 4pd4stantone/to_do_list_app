export default function ToDoList() {
  return (
    <>
      <div className="list">
        <input type="checkbox" name="done" value="done" />
        <div>Find that missing sock</div>
        <button>Edit</button>
        <button disabled={true}>Delete</button>
      </div>
    </>
  );
}