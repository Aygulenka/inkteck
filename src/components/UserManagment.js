import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
function UserManagement({ firestore }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);

  // Загрузка пользователей из Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(firestore, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const userList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };
    fetchUsers();
  }, [firestore]);

  // Функция для обновления прав пользователя в Firestore
  const updateUserPermissions = (userId, isAdmin) => {
    const userRef = doc(firestore, 'users', userId);
    updateDoc(userRef, { isAdmin });
  };
console.log(users)
  return (
    <div>
      kjbnldm;cl
       <div>
      <h2>Управление пользователями</h2>
      <div>
        <h3>Список пользователей</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => setSelectedUser(user)}>Выбрать</button>
              {user.isAdmin ? (
                <span>(Администратор)</span>
              ) : (
                <button onClick={() => setAdminUser(user)}>Сделать админом</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Выбранный пользователь</h3>
        {selectedUser && (
          <div>
            <p>{selectedUser.name}</p>
            <button onClick={() => updateUserPermissions(selectedUser.id, true)}>Дать доступ</button>
            <button onClick={() => updateUserPermissions(selectedUser.id, false)}>Забрать доступ</button>
          </div>
        )}
      </div>
      <div>
        <h3>Назначить администратора</h3>
        {adminUser && (
          <div>
            <p>{adminUser.name}</p>
            <button onClick={() => updateUserPermissions(adminUser.id, true)}>Сделать админом</button>
            <button onClick={() => setAdminUser(null)}>Отмена</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default UserManagement;
