import React, { useState, useEffect } from 'react'
import { List } from './List';

const initialUsers = [
  {id: 1, name: "Luis"},
  {id: 2, name: "Andres"},
];

function App() {
  const[users, setUsers] = useState(initialUsers);
  const[text, setText] = useState("Nuevo");
 
  const handleadd= () => {  //Arrow function que se encargara de agregar un nuevo usuario
    const newUser = {id: Date.now(), name: text}
    setUsers([...users, newUser]);//Actualizamos el nuevo estado cuando se llame esta función.....mediante el operador expret le enviamos una copa de todo lo que tenga el array users, adicionalemnte le agregamos newUser
  }

  useEffect(() => {
    console.log('App render');
  })

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleadd}>
        Add
      </button>
      <List users={users}/>
    </div>
  )
}

export { App };
