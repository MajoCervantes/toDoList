import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-center mt-5 w-full md:w-3/5 ">
      <Link
        to="/"
        className="bg-white
           py-2 px-5 w-full ml-5 text-lightPink border border-solid border-orange font-semibold hover:text-white    hover:bg-lightPink rounded-md"
      >
        Todas la tareas
      </Link>

      <Link
        to="/completed"
        className="bg-white
           py-2 px-5 w-full ml-5 text-lightPink border border-solid border-orange font-semibold hover:text-white    hover:bg-lightPink rounded-md"
      >
        Completas
      </Link>

      <Link
        to="/incompleted"
        className="bg-white
           py-2 px-5 w-full ml-5 text-lightPink border border-solid border-orange font-semibold hover:text-white    hover:bg-lightPink rounded-md"
      >
        Incompletas
      </Link>

      <Link
        to="/erased"
        className="bg-white
           py-2 px-5 w-full ml-5 text-lightPink border border-solid border-orange font-semibold hover:text-white    hover:bg-lightPink rounded-md"
      >
        Papelera
      </Link>
    </div>
  );
};

export default Footer;
