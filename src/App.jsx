import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addUsers , deleteUser, updateUser} from './Features/Users'

function App() {

  const [name, setName]=useState('')
  const [userName, setUserName]=useState('')
  const [newUserName, setNewUserName]=useState('')

  const dispatch=useDispatch()

  const data=useSelector((state)=>state.users.value)


  return (
    <>
      <div className='App'>
      <div className='addUser'>
      <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
      <input type='text' placeholder='Enter UserName' onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={()=>dispatch(addUsers({id:data[data.length-1].id+1, name:name, username:userName}))}>Add User</button>
      </div>

      <div className='displayUsers'>
        {data.map((user)=>(
          <div>
          <h5>{user.name}</h5>
          <h5>{user.username}</h5>
          <input type='text' placeholder='Enter UserName' onChange={(e)=>setNewUserName(e.target.value)}/>
          <button onClick={()=>dispatch(updateUser({id:user.id, username:newUserName}))}>Update UserName</button>
          <button onClick={()=>dispatch(deleteUser({id:user.id}))}>Delete</button>
          </div>
        ))}
      </div>        
      </div>
    </>
  )
}

export default App
