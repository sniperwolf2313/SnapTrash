import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import {Alert} from '../../components/Alert/Alert'


function Login() {


   const {loading} = useAuth()


   if(loading) return <h1>Cargando...</h1>


   const [user, setUser] = useState({
       email: '',
       password: '',
   })


   const {login, loginGoogle} = useAuth()
   const navigate = useNavigate()
   const [error, setError] = useState()


   const handleChange = ({target: {name,value}}) =>{
      setUser({...user,[name]:value})
   }


   const handleSubmit =async (e) =>{
       e.preventDefault()
       setError('')
       try {
           await login(user.email, user.password)
           navigate('/')
       } catch (error) {
           if (error.code === 'auth/user-not-found'){
               setError('password incorrecta')
           }
       }
   }


   const handleGoogleLogin = async() => {
       setError('')
       try {
           await loginGoogle()
           navigate('/')
       } catch (error) {
           /* if (error.code === 'auth/user-not-found'){
               setError('password incorrecta')
           } */
       }
   }


 return (
   <div className="container w-75 bg-primary mt-5 rounded shadow">


   <div className="row align-items-stretch">
      
       <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
           <div className="col bg-white p-5 rounded-end">

               <div className="text-end">
                   <img src="../../assets/images/logo.png" width="48" alt=""/>
               </div>


               <div className="text-center">
                   <h2 className="fw-bold text-center py-5">Inicio Sesión</h2>
               </div>


               {error && <Alert message={error}/> }


               <form onSubmit={handleSubmit} class="row g-3">


                   <div className="form-group mb-4 text-start">
                       <label for="email" class="form-label">Correo Electronico</label>
                       <input type="email" class="form-control" name="email" required
                       onChange={handleChange}
                       />
                       <label for="password" class="form-label">Contraseña</label>
                       <input type="password" class="form-control" name="password" required
                       onChange={handleChange}
                       />
                   </div>


                   <div className="form-group d-grid">
                       <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                   </div>
                   <div className="my-2">
                       <Link style={{textDecoration:'none',color:'#ACD9B2'}} to={'/resetpassword'}><span>Olvide mi contrasena?</span> </Link>
                   </div>
                   <div class="my-2">
                       <span>No tienes cuenta?</span> <Link style={{textDecoration:'none',color:'#ACD9B2'}} to={'/signup'}>REGISTRATE AQUI</Link>
                   </div>


               </form>


               <div className="container w-100 my-5">


                   <div className="row text-center">
                       <div className="col-12"> Iniciar Sesión con</div>
                   </div>


                   <div className="row">
                       <div className="col">
                           <button className="btn btn-outline-primary w-100 my-1">
                               <div className="row align-items-center">
              
                                   <div className="col-2 d-none d-md-block">
                                       <img src="../../assets/icons/facebook.png" width="32" alt=""/>
                                   </div>


                                   <div className="col-12 col-md-10 text-center">Facebook</div>


                               </div>
                           </button>
                       </div>


                       <div className="col">
                       <button onClick={handleGoogleLogin} class="btn btn-outline-danger w-100 my-1">


                           <div className="row align-items-center">
                               <div className="col-2 d-none d-md-block">
                                   <img src="../../assets/icons/google.png" width="32" alt=""/>
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


export default Login