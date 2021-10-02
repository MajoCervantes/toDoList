import React from 'react'

const Header = ({listItems, children}) => {
    return (
      <div className="flex items-center justify-between w- bg-lightBlue">
      <h3 className= " text-center text-5xl p-10 text-white">
      {listItems.filter(t => !t.status).length}{" "}
      Tareas por hacer
    </h3>
{children}
    </div>
    )
}

export default Header
