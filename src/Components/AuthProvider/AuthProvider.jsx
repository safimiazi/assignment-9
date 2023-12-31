import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const UserContext = createContext(null)

const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
   
    const createUser = (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    //signUp with google
    const signUpUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    //signUp with github 
    const signUpWithGithub = () =>{
        return signInWithPopup(auth, githubProvider)

    }

    //signUp with facebook
    const signUpWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)

    }

    //update profile
    const profileUpdate = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }

    useEffect(()=> {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log('observing the current user inside useEffect', currentUser)

        });
        () => {
            return unSubscribe()
        }
    },[])

    const AuthInfo = {
        user,
        createUser,
        signInUser,
        logoutUser,
        loading,
        signUpUserWithGoogle,
        signUpWithGithub,
        signUpWithFacebook,
        profileUpdate
    }

    return (
        <UserContext.Provider value={AuthInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;