import {createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signOut} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {onAuthStateChanged} from 'firebase/auth'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../config/firebase'

export const authContext = createContext()

export const useAuth = ()=>{
   const context = useContext(authContext)
   if(!context) throw new Error("No auth context")
   return context
}


export function AuthProvider ({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth()
    const signup = async (email, password) => {
        await createUserWithEmailAndPassword (auth, email, password)
    }

    const login = async (email, password) => {
        await signInWithEmailAndPassword (auth, email, password)
    }

    const logout = async () => {
        await signOut(auth)
    }

    const loginGoogle = async () => {
        const googleProvider = new GoogleAuthProvider()
        return await signInWithPopup(auth, googleProvider)
    }

    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsuscribe()
    })
    
    return(
        <authContext.Provider value ={{signup, login, user, logout,loginGoogle, resetPassword, loading}}>
            {children}
        </authContext.Provider>
    )
}