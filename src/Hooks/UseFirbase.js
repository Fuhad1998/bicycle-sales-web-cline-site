import { useEffect, useState } from "react";
import initializeAuthentication from "../Component/Firebase/Firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isloding, setIsloding] = useState(true);

  const auth = getAuth();

  const registerUser = (email, password) => {
    setIsloding(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      })
      .finally(() => setIsloding(false));
  };


  const loginUser = (email, password) =>{
    setIsloding(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => setIsloding(false));

  }


  const logOut = () =>{
    setIsloding(true)
    signOut(auth).then(() => {
        
      }).catch((error) => {
       
      })
      .finally(() => setIsloding(false));
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          
          setUser(user)
          
        } else {
          setUser({})
        }
        setIsloding(false)
      });
      return () => unsubscribe;
  }, [])

  return {
    user,
    registerUser,
    loginUser,
    logOut,
    isloding
  };
};

export default UseFirebase;
