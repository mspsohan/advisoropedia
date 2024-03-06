import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config'
export const AuthContext = createContext();

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [socialUser, setSocialUser] = useState(null)
   const [loading, setLoading] = useState(false);

   const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   const logOut = async () => {
      setLoading(true)
      return signOut(auth)
   }

   // onAuthStateChange
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('CurrentUser ==>', currentUser)
         setSocialUser(currentUser)
         setLoading(false)
      })
      return () => {
         return unsubscribe()
      }
   }, [])

   useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      setLoading(false);
   }, []);

   const authInfo = {
      user,
      socialUser,
      setUser,
      loading,
      logOut,
      signInWithGoogle
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};
AuthProvider.propTypes = {
   children: PropTypes.node,
};

export default AuthProvider;

