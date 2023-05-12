import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import Report from './views/Report/Report'
import MyReports from './views/Report/MyReports'
import Login from './views/Login/Login'
import SignUp from './views/SignUp/SignUp'
import Help from './views/Help/Help'
import Profile from './views/Profile/Profile'
import {AuthProvider} from './context/authContext'
import ProtectecRoute from './routes/ProtectedRoute'
import ResetPassword from './views/Login/ResetPassword'
import Footer from './components/Footer/Footer'
import NavbarComponent from './components/NavBar/NavBarComp'


function App() {
  return (
    <div className='App'>
      <NavbarComponent/>
      <AuthProvider>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route exact path ='/home' element={<Home/>}/>
            <Route path ='/login' element={<Login/>}/>
            <Route path ='/resetpassword' element={<ResetPassword/>}/>
            <Route path ='/signup' element={<SignUp/>}/>
            <Route path ='/report' element={
            <ProtectecRoute>
              <Report/>
            </ProtectecRoute>}/>
            <Route path ='/myreports' element={
            <ProtectecRoute>
              <MyReports/>
            </ProtectecRoute>}/>
            <Route path ='/help' element={<Help/>}/>
            <Route path ='/profile' element={
            <ProtectecRoute>
              <Profile/>
            </ProtectecRoute>
            }/>
        </Routes>
      </AuthProvider>
      <Footer/>
    </div>
  );
}

export default App