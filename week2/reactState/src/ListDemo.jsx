import {useState} from "react";
/*
    Keys are important when creating lists in React. because they help React identify each list item uniquely.
    The key should be a unique value for each item in the list.
    The key is used to update the list when an item is added, removed, or changed.
    The key should be a string or a number.
    The key should be unique, but it does not have to be globally unique.
*/
function MemberTable({ members }) {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
        {members.map((member,index) => (
            <tr key={index}> 
            <td>{member.name}</td>
            <td>{member.age}</td>
            </tr>
        ))}
        </tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
        <MemberTable members={props.members} />
    </div>
  );
}

export default function ListDemo() {

  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];

  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}