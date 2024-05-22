import React, { useState } from 'react';
import { Alert, Button,Form } from 'react-bootstrap';


const PasswordDisplay = ({ password }) => {
  
  const [copy,setCopy]=useState(false)
  const copyToClipboard = () => {
   setCopy(!copy)
    navigator.clipboard.writeText(password);
  };
  return (
    <>    
   <h1> {copy} </h1> 
          <div style={{display:"flex"}} className="list-group-item">
          <input type="text" value={password} style={{backgroundColor:"white",borderRadius:"5px", width:"100%"}} />
          {copy? <Button variant="outline-success" onClick={copyToClipboard}>
              Copied
            </Button> : <Button variant="outline-primary" onClick={copyToClipboard}>
              Copy
            </Button> 
            }
          </div>
    </>
  );
};

export default PasswordDisplay;


