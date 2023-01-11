import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";




const auth = getAuth(app)
export const myContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) 


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)


    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                console.log('user inside State Change', currentUser);
                setUser(currentUser)
                setLoading(false)
               
            });
            return ()=>{
                unsubscribe();
            }
        },[])

        const logOut = () =>{
            setLoading(true)
            return signOut(auth)
        }




    const allInfo = {user,createUser,logIn, googleSignIn,logOut,loading,updateUser}
  return (
  <myContext.Provider value={allInfo}> 
    {children}
  </myContext.Provider>
  );
};

export default AuthProvider;
