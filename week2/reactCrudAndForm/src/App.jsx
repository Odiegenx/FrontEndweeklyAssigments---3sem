import { useEffect, useState } from 'react'
import './styles/App.css'
import PersonList from './components/PersonList'
import PersonForm from './components/PersonForm'
import { fetchData } from './utill/persistance'

const blankPerson = {
    id: "",
    age: "",
    name: "",
    email: "",
    gender: ""
}


function App() {
  const [persons, setPersons] = useState([]);
  const [personToEdit, setPersonToEdit] = useState(blankPerson);
  const [isEdit, setIsEdit] = useState(false);
  const APIURL = 'http://localhost:3001/api';

  function editPerson(person){
    setPersonToEdit(person);
    setIsEdit(true);
  }

  function getPersons(callback) {
      // Fetch persons from the API
      fetchData(APIURL, callback);
      // and update UserState (setPersons)
  }

  function deletePersonById(id) {
    // Delete a person from the API
   fetchData(`${APIURL}/${id}`, () => {},"DELETE");
    // and update UserState (setPersons)
    setPersons(persons.filter(person => person.id !== id));

}
  function updateOrAddPerson(person){
  console.log({person});
  if(isEdit){
    updatePerson(person);
  }else{
    addPerson(person);
  }
  }
  function addPerson(person){
    console.log("create person");

    /*
    Not sure why, but writing to the db for some reason does not set the id
    on its own.. so we have to do it manually here.
    */
    if (person.id === "") { // If this is a new person
      const maxId = Math.max(...persons.map(p => p.id));
      person.id = (maxId + 1).toString();
  }
    fetchData(APIURL, (person) => setPersons([...persons,person]),"POST",person);
  }
  function updatePerson(person){
    console.log("update person");
    fetchData(`${APIURL}/${person.id}`,
    (person) => setPersons(persons.map(p => p.id === person.id ? {...person}:p)),
    "PUT",person);
    }

  useEffect(() => {
    // get all persons
    getPersons((data) => setPersons(data));
    /*
    fetch('http://localhost:3001/api')
    .then(res => res.json())
    .then(data => setPersons(data))
    console.log(persons)
    */
  }, []);

  return (
    <div>
      <h1>Person DB</h1>
      <PersonList persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>
      <PersonForm setIsEdit={setIsEdit} blankPerson={blankPerson} isEdit={isEdit} personToEdit={personToEdit} updateOrAddPerson={updateOrAddPerson}/>
    </div>
  )
}

export default App
