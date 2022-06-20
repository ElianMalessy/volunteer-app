import {useContext, useState, useEffect, createContext} from 'react';
import {getAuth} from 'firebase/auth';
import app from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
  sendPasswordResetEmail,
  updatePassword,
  deleteUser,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth(app);
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function anonSignup() {
    return signInAnonymously(auth);
  }

  function updateUserPassword(password) {
    return updatePassword(auth, password);
  }

  function updateUsername(username) {
    return updateProfile(currentUser, {displayName: username});
  }

  function updateProfilePic(profilePic) {
    return updateProfile(currentUser, {photoURL: profilePic});
  }

  function deleteCurrentUser() {
    return deleteUser(currentUser);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    anonSignup,
    resetPassword,
    updateUserPassword,
    deleteCurrentUser,
    updateUsername,
    updateProfilePic,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
