import React from "react";

const IncompletedTaks = ({ taskTableRows }) => {
  return (
    <div>
            <div className="flex flex-col">
              <h1 className="text-pink">{taskTableRows(false)}</h1>
            </div>
    </div>
  );
};

export default IncompletedTaks;
