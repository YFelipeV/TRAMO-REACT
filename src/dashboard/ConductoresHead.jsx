import React from "react";

function ConductoresHead({ head }) {
  return (
    <>
      
          <thead>
            <tr>
              {head.todo.map((name, index) => (
                <>
                  <th
                    className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    key={index}
                  >
                    {name}
                  </th>
                </>
              ))}
            </tr>
          </thead>
       
      
    </>
  );
}

export default ConductoresHead;
