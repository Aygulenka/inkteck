// import React, { useState } from 'react';
// import { storage, firestore } from '../firebase';
//  import firebase from 'firebase/app'; // Исправленный импорт
// import 'firebase/firestore';
// import 'firebase/storage';

// const Days = () => {
//     const [dayNumber, setDayNumber] = useState('');
//     const [title, setTitle] = useState('');
//     const [text, setText] = useState('');
//     const [image, setImage] = useState(null);
//     const [fontSize, setFontSize] = useState('16px');

//     // Функция для загрузки изображения на Firebase Storage
//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         const storageRef = firebase.storage().ref(`images/${file.name}`);
//         storageRef.put(file).then(() => {
//             storageRef.getDownloadURL().then((url) => {
//                 setImage(url);
//             });
//         });
//     };

//     // Функция для сохранения данных в Firebase
//     const saveDataToFirebase = () => {
//         const db = firebase.firestore();
//         db.collection('days').doc(dayNumber).set({
//             title: title,
//             text: text,
//             image: image,
//             fontSize: fontSize
//         })
//         .then(() => {
//             console.log("Document successfully written!");
//             // Сброс формы после успешного сохранения
//             setDayNumber('');
//             setTitle('');
//             setText('');
//             setImage(null);
//             setFontSize('16px');
//         })
//         .catch((error) => {
//             console.error("Error writing document: ", error);
//         });
//     };

//     return (
//         <div>
//             <label>Day Number: </label>
//             <input type="number" value={dayNumber} onChange={(e) => setDayNumber(e.target.value)} /><br />

//             <label>Title: </label>
//             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{ fontSize: '20px' }} /><br />

//             <label>Text: </label>
//             <textarea value={text} onChange={(e) => setText(e.target.value)} style={{ fontSize: fontSize }} /><br />

//             <label>Image: </label>
//             <input type="file" accept="image/*" onChange={handleImageUpload} /><br />

//             <label>Font Size: </label>
//             <input type="number" value={fontSize} onChange={(e) => setFontSize(`${e.target.value}px`)} /><br />

//             <button onClick={saveDataToFirebase}>Save</button>
//         </div>
//     );
// }

// export default Days;
