// components/MainScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LearningProgress from './LearningProgress';

function MainScreen() {
  const navigate = useNavigate();

  const goToLearn = () => {
    navigate('/learn'); // Переход на страницу обучения
  };

  return (
    <div className="main-screen">
      <h1>Добро пожаловать на страницу обучения </h1>
      <p>Тут ты найдешь персональный план обученияи многое другое</p>
      <LearningProgress/>
      {/* <button onClick={goToLearn}>Перейти к обучению</button>
      <p>Тут ты найдешь персональный план обучения</p> */}
    </div>
  );
}

export default MainScreen;
