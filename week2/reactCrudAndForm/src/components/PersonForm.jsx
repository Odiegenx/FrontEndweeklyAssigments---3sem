import React,{useState,useEffect} from 'react'

export default function PersonForm({blankPerson,isEdit,setIsEdit,personToEdit,updateOrAddPerson}) {

    const [person, setPerson] = useState({...personToEdit});

    useEffect(() => {  
        setPerson(personToEdit);
    }, [personToEdit])

    function handleChange(e) {
        const value = e.target.value;
        /*
        setPerson({
            ...person,
            [e.target.id]: value
        });*/
        const name = e.target.id;
        setPerson({...person, [name]: value})
    }
    function handleSubmit(e) { 
        e.preventDefault();
        updateOrAddPerson(person);
    }
    function resetForm(e) {
        e.preventDefault();
        setIsEdit(false);
        setPerson(blankPerson);
    }

  return (
    <div>
        <h1>Add/Edit Person</h1>
        {JSON.stringify(person)}
    <form onSubmit={handleSubmit}>
    <label htmlFor="id">Id</label>
    <input id="id" type="number" readOnly placeholder="id" value={person.id}/>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" placeholder="name" value={person.name} onChange={handleChange}/>
    <label htmlFor="age">Age</label>
    <input id="age" type="number" min="1" max="120" placeholder="age"  value={person.age} onChange={handleChange}/>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" placeholder="email" value={person.email} onChange={handleChange} />
    <label htmlFor="gender">Gender</label>
    <select id="gender" value={person.gender} onChange={handleChange} >
        <option defaultChecked>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <button onClick={resetForm}>{true ? 'Reset' : 'Add'}</button>
    <button type="">{isEdit ? 'Update' : 'Add'}</button>
</form>
    </div>
  )

}
