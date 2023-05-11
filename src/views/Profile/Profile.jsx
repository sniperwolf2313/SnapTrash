import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom';

function Profile() {

 const {user,logout, loading} = useAuth()
 const [error, setError] = useState()
 const handleLogout = async ()=>{
   setError('')
   try {
     await logout()
   } catch (error) {
   }
 }

 if(loading) return <h1>Cargando...</h1>
 return (
   <div>
     {error && <Alert message={error}/> }
     <h1>Welcome {user.email}</h1>
     <button onClick={handleLogout}>Salir</button>
   </div>
 )
}
export default Profile