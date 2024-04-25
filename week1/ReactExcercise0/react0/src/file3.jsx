import React from "react";
import {persons} from "./file2";

console.log(persons);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
function WelcomePerson(props){
    return <p>name = {props.person.firstName}</p>
  }
  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person ={persons[0]}/>
        <WelcomePerson person ={persons[1]}/>
        <WelcomePerson person ={persons[2]}/>
        {persons.map( (person, index) => <WelcomePerson key={index} person={person} />)}
      </div>
    );
  }


  export default MultiWelcome