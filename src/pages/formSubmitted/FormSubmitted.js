import React from "react";
import './FormSubmitted.css';

function FormSubmitted() {
  return (
    <div className="body">
      <div className="header">Your form has been submitted and is awaiting admin approval.</div>
      <div className="undertext">I was having trouble with the email system and couldn't get it to work. Currently all users are enabled by default as a user.</div>
    </div>
  )
};

export default FormSubmitted;