import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-10">
         
         <Link to="/"
         className="bg-white py-2 px-5 ml-5 text-orange border border-solid border-orange font-semibold hover:text-cream blue hover:bg-lightBlue hover:border-cream rounded-md">
         Todas la tareas
         </Link>
        
        <Link to="/completed"
        className= "bg-white py-2 px-5 ml-5 text-orange border border-solid border-orange font-semibold hover:text-cream blue hover:bg-lightBlue hover:border-cream rounded-md">
        Completas
        </Link>
        
        <Link to="/incompleted"
        className= "bg-white py-2 px-5 ml-5 text-orange border border-solid border-orange font-semibold hover:text-cream blue hover:bg-lightBlue hover:border-cream rounded-md">
        Incompletas
        </Link>        
          
        </div>
    )
}

export default Footer
