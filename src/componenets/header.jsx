import React from "react";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <header>
      <div className="left-header">
        <h1> Shivraj Solutions</h1>
      </div>
      <div className="righ-header">
        <ul>
          
            <Link>Home</Link>
         
            <Link>Apply for jobs</Link>
        
            <Link>About us</Link>
         
          </ul>
      </div>
    </header>
  );
};
export default header;
