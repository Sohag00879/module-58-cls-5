import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider ,onAuthStateChanged,signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{ 
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
            console.log(result.user)
        })
        .catch(error => {
            setError(setError.message);
        })

    }
const singInUsingGithub = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
        setUser(result.user);
    })
}

    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    },[])

    return{
        user,
        error,
        signInUsingGoogle,
        singInUsingGithub,
        logout
    }  

}

export default useFirebase;