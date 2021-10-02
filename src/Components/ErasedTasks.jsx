import React from 'react'

const ErasedTasks = ({taskTableRows, callback}) => {
    return (
        <div className="form-check ml-5">
        <input
          type="checkbox"
          checked={taskTableRows}
          onChange={ e => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label" className="text-orange">
          Tareas borradas
        </label>
      </div>
    )
}

export default ErasedTasks
