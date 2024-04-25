import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import upper, {text1,text2, text3} from "./file1";
import obj,{males,females} from './file2';
import './App.css'
import MultiWelcome from './file3';

function App() {
  const person = obj;
  const {firstName,email} = person;
  
  const nameArr = [...males,...females,"Helle"];

  console.log(nameArr);

  const personV2 = {...person,phone: 123456,nameArr};

  console.log(personV2);

  return (
    <>
      <h2>
        Ex2
        <p>name = {firstName} email = {email}</p>
        <p>{nameArr}</p>
      </h2>
      <h2>
        Ex3
      <MultiWelcome/>
      </h2>

     <p>{upper("please uppercase this")}</p>
    </>
  )
}

export default App
