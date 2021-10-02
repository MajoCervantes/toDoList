import React from 'react'

const AllTasks = ({callback, listItems}) => {
    return (
        <div className="form-check ml-5">
        <input
          type="checkbox"
          checked={listItems}
          onChange={ e => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label" className="text-orange">
          Todas la tareas
        </label>
      </div>
    )
}

export default AllTasks
