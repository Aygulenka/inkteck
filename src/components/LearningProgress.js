// LearningProgress.js
import React from 'react';
import './learnStyles.css'
import { useNavigate } from 'react-router-dom';
function getCurrentDay() {
    const startDate = new Date('2024-04-22'); // Предположим, что обучение началось 1 января 2024 года
    const today = new Date();
    
    // Вычисляем количество дней между текущей датой и начальной датой
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
    // Вычисляем количество выходных дней между начальной и текущей датой
    const weekendsPassed = Math.floor((daysPassed + startDate.getDay()) / 7) * 2;
    
    // Добавляем количество прошедших дней и вычитаем количество выходных дней
    const currentDay = daysPassed - weekendsPassed + 1;
    
    return currentDay;
  }
  

function LearningProgress() {

    const navigate = useNavigate();

    const goToLearn = () => {
      navigate('/learn'); // Переход на страницу обучения
    };
    const goToTest = () => {
        navigate('/test'); // Переход на страницу обучения
      };
    const totalDays = 10;
    const currentDay = getCurrentDay();
    const daysLeft = totalDays - currentDay;
    const passedDays = totalDays - daysLeft ;
  
    // Создаем массив букв для прогресса
    const letters = ['D','R','O','P','O','M','A','N','I','A'].map((letter, index) => (index < currentDay ? letter : '_'));
  
    return (
        <>
      <div className="learning-progress">
        <p className='progress'>День: {currentDay}</p>
        <p className='progress'>Осталось дней: {daysLeft}</p>
        {/* <p className='progress'>Прогресс: {passedDays}</p> */}
        </div>
        <div className="progress-bar">
         <p className='letters'> {letters.join(' ')}</p>
          </div>

        <button onClick={goToLearn} className='butGoToLearn'><p className='letters'>Перейти к текущему уроку</p></button>
        <button onClick={goToTest} className='butGoToLearn'><p className='letters'>Перейти к тесту</p></button>
      </>
    );
  }

  
  export default LearningProgress;