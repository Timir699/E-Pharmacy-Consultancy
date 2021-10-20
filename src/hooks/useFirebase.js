import initFirebase from "../firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, FacebookAuthProvider, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initFirebase()

const useFirebase = () => {
    // States
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    localStorage.setItem('loading', isLoading)

    const [registerLogin, setRegisterLogin] = useState({
        displayName: '',
        email: '',
        password: '',
    })

    // Firebase Auth Providers

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // Destructuring User information
    const { email, password, name } = registerLogin

    // Google Sign In Functionality

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    // Github Sign In Functionality

    const signInWithGithub = () => {
        setIsLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                setSuccess("Successfully Registered")
                setError('')
            }).catch((error) => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Facebook sign In Functionality

    const signInWithFacebook = () => {
        setIsLoading(true)
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user)
                setSuccess("Successfully Registered")
                setError('')
            }).catch((error) => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Email & Pass log in create Functionality


    const createWithEmail = () => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user)
                localStorage.setItem('user', userCredential.user)
                console.log(user);
                verifyEmail()
                getName()
                setSuccess("Check Your Email, after confitmation your account will be registered")
                setError('')
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Email & Pass sign in Functionality


    const signInWithEmail = () => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user)
                localStorage.setItem('user', userCredential.user)
                console.log(user);
                setSuccess("Successfully Login")
                setError('')
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Email Verification Functionality

    const verifyEmail = () => {
        setIsLoading(true)
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            }).finally(() => setIsLoading(false))
    }
    // Reset password functionality

    const resetPass = () => {
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(result => console.log(result))
            .finally(() => setIsLoading(false))
    }
    // Getting name from user
    const getName = () => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {

            }).finally(() => setIsLoading(false))
    }
    // Logout Funtionality
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setSuccess('SuccesFully Logged out')
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    // Handling Side Effects
    useEffect(() => {
        // setIsLoading(false)
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [auth])


    return {
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        createWithEmail,
        signInWithEmail,
        user,
        setUser,
        registerLogin,
        setRegisterLogin,
        error,
        setError,
        success,
        setSuccess,
        resetPass,
        isLoading,
        setIsLoading,
        logout
    }
}

export default useFirebase