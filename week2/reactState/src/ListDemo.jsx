import {useState} from "react";

function MemberTable({ members }) {
  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
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