import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import './form.css'
const RegisterComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [user, setUser] = useState(null); 
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const usersCollection = collection(db, 'users');
  
    const register = async (user) => {
      console.log("user.metadata", user.metadata, {user})
      await updateProfile(user, { displayName });
      const userId = user.uid;
      console.log(userId)
      const creationTime = new Date(user.metadata.creationTime).toLocaleString();
      const lastLoginAt = new Date(user.metadata.lastSignInTime).toLocaleString();
      const isBlocked = false;
  
      await addDoc(usersCollection, { email, password, userId, displayName, creationTime, lastLoginAt, isBlocked });
      console.log("User registered:", user);
      setUser(user);
    };
  
    const handleRegister = async () => {
      try {
        const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        if (user && !user.disabled) {
          await register(user);
          navigate('/mainScreen');
        } else {
          // Если пользователь заблокирован или удален, отображаем сообщение об ошибке
          setErrorMessage('Your account is blocked or deleted.');
          setShowModal(true);
        }
      } catch (error) {
        // Обрабатываем ошибки
        console.log(error.message);
        if (error.code === 'auth/email-already-in-use') {
          const { user } = await createUserWithEmailAndPassword(firebaseAuth, email.charAt((0), '9379992'), password.padEnd(6,0));
          await register(user);
          navigate('/table');
        } else {
          if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email')
      {    setErrorMessage('An error occurred during registration.');
          setShowModal(true);}
        }
      }
    };
    const handleCloseModal = () => {
      setShowModal(false);
    };
    return (
      <div className="form-container">
        <h2>REGISTRATION</h2>
        <input type="text" placeholder="Username" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className='input-form'/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-form'/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-form'/>
        <button onClick={handleRegister} className='but-home'>Register</button>
        {/* You can render user details here if needed
        {user && (
          <div>
            <p>User Information:</p>
            <p>Email: {user.email}</p>
            <p>UID: {user.uid}</p>
          </div> */}
        {/* )} */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h1>{errorMessage}</h1>
              <button onClick={handleCloseModal} className='but-home'>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default RegisterComponent;
