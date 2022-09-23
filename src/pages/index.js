import React, { useState, useEffect } from "react";
import { sendMail } from "../services/sendMail";


function HomePage() {

  const [getMailValue, setGetMailValue] = useState();

  const handleChange = event => {
    setGetMailValue(event.target.value);
  };

  async function handleOnClick (){
    console.log("🚀 ~ file: index.js ~ line 15 ~ handleOnClick ~ getMailValue", getMailValue)
    let response = await sendMail(getMailValue);
    console.log(response);
  }

  const buttonWrapperStyle = {
    color: "white",
    display: "inline-block",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxWidth: '240px',
    margin: '0 auto',
    borderRadius: '3px'
  };

  return(<div style={buttonWrapperStyle}>
      <input type="text"  value={getMailValue} onChange={handleChange}/><button  onClick={ (e) => handleOnClick(e)}>Send me this url</button>
    </div>)
}

export default HomePage;