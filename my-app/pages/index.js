import Head from "next/head";
import { useRef } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emailInputRef = useRef();
const feedbackInputRef = useRef();

function submitFormHandler(event){
  event.preventDefault();
  const enteredEmail = emailInputRef.current.value;
  const enteredFeedback = feedbackInputRef.current.value;

  const reqBody = { email: enteredEmail, text: enteredFeedback };

  fetch('/api/feedback',{
    method: 'POST', 
    body: JSON.stringify(reqBody),
    headers: {
      'Content-Type':'application/json'
    }
  }).then( response => response.json())
    .then( (data) => console.log(data));

}
  return (
    <div>
      <h1>The Home Page</h1>
    <form onSubmit={submitFormHandler}>
        <div>
          <label for='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label for='feedback'>Your  feedback</label>
          <textarea  id='feedback' rows="5" ref={feedbackInputRef} />
        </div>
        <button>
            Send Feedback
        </button>
    </form> 
    </div>
    
  );
}
