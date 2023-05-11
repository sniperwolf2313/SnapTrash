import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from '../../components/Alert'


function SignUp() {

   const [user, setUser] = useState({
       email: '',
       password: '',
   })

   const {signup, loginGoogle, loading} = useAuth()
   const navigate = useNavigate()
   const [error, setError] = useState()

   const handleChange = ({target: {name,value}}) =>{
      setUser({...user,[name]:value})
   }

   const handleSubmit =async (e) =>{
       e.preventDefault()
       setError('')
       try {
           await signup(user.email, user.password)
           navigate('/')
       } catch (error) {
           if (error.code === 'auth/invalid-email'){
               setError('Correo inválido')
           }
           if (error.code === 'auth/weak-password'){
               setError('La contraseña debe tener al menos 6 caracteres')
           }
           if (error.code === 'auth/email-already-in-use'){
               setError('El correo ya está en uso')
           }
       }
   }

   const handleGoogleLogin = async() => {
       setError('')
       try {
           await loginGoogle()
           navigate('/')
       } catch (error) {
       }
   }

   if(loading) return <h1>Cargando...</h1>

 return (
   <div className="container w-75 bg-primary mt-5 rounded shadow">

   <div className="row align-items-stretch">

       <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
           <div className="col bg-white p-5 rounded-end">

               <div className="text-end">
                   <img src="src/assets/images/logo.png" width="48" alt=""/>
               </div>

               <div className="text-center">
                   <h2 className="fw-bold text-center py-5">Registrarse</h2>
               </div>

               {error && <Alert message={error}/> }

               <form onSubmit={handleSubmit} class="row g-3">

                   <div className="form-group mb-4 text-start">
                       <label for="email" class="form-label">Correo electrónico</label>
                       <input type="email" class="form-control" name="email" required
                       onChange={handleChange}
                       />
                       <label for="password" class="form-label">Contraseña</label>
                       <input type="password" class="form-control" name="password" required
                       onChange={handleChange}
                       />
                   </div>

                   <div className="form-group d-grid">
                       <button type="submit" class="btn btn-primary">Registrarse</button>
                   </div>
                   <div class="my-2">
                       <span>¿Ya tienes cuenta?</span> <Link style={{textDecoration:'none',color:'#ACD9B2'}} to={'/login'}>INGRESA AQUÍ</Link>
                   </div>
               </form>

               <div className="container w-100 my-5">
                   <div className="row text-center">
                       <div className="col-12">Registrarse con</div>
                   </div>

                   <div className="row">
                       <div className="col">
                           <button className="btn btn-outline-primary w-100 my-1">
                               <div className="row align-items-center">
                                   <div className="col-2 d-none d-md-block">
                                       <img src="src/assets/icons/facebook.png" width="32" alt=""/>
                                   </div>
                                   <div className="col-12 col-md-10 text-center">Facebook</div>
                               </div>
                           </button>
                       </div>

                       <div className="col">
                       <button onClick={handleGoogleLogin} class="btn btn-outline-danger w-100 my-1">
                           <div className="row align-items-center">
                               <div className="col-2 d-none d-md-block">
                                   <img src="src/assets/icons/google.png" width="32" alt=""/>
                               </div>
                               <div className="col-12 col-md-10 text-center">Google</div>
                           </div>
                       </button>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
 );
}
export default SignUp