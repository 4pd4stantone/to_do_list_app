export default function Form() {
  return (
    <>
      <div className="add-section">
        <input
          className="add-input"
          type="text"
          name="newTask"
          placeholder="add to-do item"
        />
        <button className="add-btn">Add</button>
      </div>
    </>
  );
}