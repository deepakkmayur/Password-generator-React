import React from 'react';

const PreviousPassword = ({ history }) => {
  // console.log(history,"///////");
  return (
    <div>
      <h2 className="mt-4">Last 5 Passwords:</h2>
      <ul className="list-group">
        {history.map((pass, index) => (
          <li key={index} className="list-group-item">                           
            {pass}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousPassword;
