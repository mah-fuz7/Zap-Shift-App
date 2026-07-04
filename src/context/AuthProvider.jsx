import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


// Google Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

 
// User State
  const [user, setUser] = useState(null);

// Loading State
  const [loading, setLoading] = useState(true);



 // Google Login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

   // Register User
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

    // Update Profile
  const updateUserProfile = ({ displayName, photoURL }) => {
  return updateProfile(auth.currentUser, {
    displayName,
    photoURL,
  });
};

   // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

   // Forgot Password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Listen for Auth Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);


    const authInfo =useMemo(
        ()=>({
            user,
            setUser,
            loading,
            signInWithGoogle,
            registerUser,
            login,
            updateUserProfile,
            logout,
            forgotPassword

        }),[user,loading]
    )
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;