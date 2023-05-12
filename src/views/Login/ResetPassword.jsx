import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import {Alert} from '../../components/Alert/Alert'


function ResetPassword() {

   const {loading} = useAuth()

   if(loading) return <h1>Cargando...</h1>

   const [user, setUser] = useState({
       email: '',
   })
   const {resetPassword} = useAuth()
   const navigate = useNavigate()
   const [error, setError] = useState()

   const handleChange = ({target: {name,value}}) =>{
      setUser({...user,[name]:value})
   }

   const handleResetPassword =async (e) =>{
       e.preventDefault()
       setError('')
       try {
           await resetPassword(user.email)
           setError('Se ha enviado un correo con un link para que recuperes tu contraseña')
       } catch (error) {
       }
   }

 return (
   <div className="container w-75 bg-primary mt-5 rounded shadow">
       <div className="row align-items-stretch">
               <div className="col bg-white p-5 rounded-end">

                   <div className="text-end">
                       <img src="../../assets/images/logo.png" width="48" alt=""/>
                   </div>

                   <div className="text-center">
                       <h2 className="fw-bold text-center py-5">Recuperar contraseña</h2>
                   </div>

                   {error && <Alert message={error}/> }

                   <form onSubmit={handleResetPassword} class="row g-3">
                       <div className="form-group mb-4 text-start">
                           <label for="email" class="form-label">Correo electrónico</label>
                           <input type="email" class="form-control" name="email" required
                           onChange={handleChange}
                           />
                       </div>

                       <div className="form-group d-grid">
                           <button type="submit" class="btn btn-primary">Recuperar contraseña</button>
                       </div>
                       <div className="my-2">
                           <span>¿No tienes cuenta?</span> <Link style={{textDecoration:'none',color:'#ACD9B2'}} to={'/signup'}>REGISTRATE AQUÍ</Link>
                       </div>
                       <div className="my-2">
                           <Link style={{textDecoration:'none',color:'#ACD9B2'}} to={'/login'}>INGRESA AQUÍ</Link>
                       </div>
                   </form>
           </div>
       </div>
   </div>
 )
}

export default ResetPassword