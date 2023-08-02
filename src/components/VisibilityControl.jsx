import React from 'react'

function VisibilityControl({isChecked, setshowCompleted, cleanTask}) {

    const handleDelete = () => {
        if(window.confirm('are you segure you want to delete ir')){
            cleanTask()
        }
    }
  return (
    <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />{" "}
        <label>Show task done</label>

        <button onClick={handleDelete}>Clean</button>
    </div>
  )
}

export default VisibilityControl