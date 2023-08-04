import React from "react";

function VisibilityControl({ isChecked, setshowCompleted, cleanTask }) {
  const handleDelete = () => {
    if (window.confirm("are you segure you want to delete ir")) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-while text-center p-2 border-secondary">
      <div className="form-check form-switch">
      <input
      className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setshowCompleted(e.target.checked)}
      />{" "}
      <label>Show task done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clean
      </button>
    </div>
  );
}

export default VisibilityControl;
