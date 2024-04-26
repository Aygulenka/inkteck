// // LearningProgress.js
// import React from 'react';
// import './learnStyles.css'
// import { useNavigate } from 'react-router-dom';
// import Day1 from './days/Day1';
// import Day2 from './days/Day2';
// import Day3 from './days/Day3';
// import Day4 from './days/Day4';
// import Day5 from './days/Day5';
// import Day6 from './days/Day6';
// import Day7 from './days/Day7';
// import Day8 from './days/Day8';
// import Day9 from './days/Day9';
// import Day10 from './days/Day10';
// function getCurrentDay() {
//     const startDate = new Date('2024-04-22'); // Предположим, что обучение началось 1 января 2024 года
//     const today = new Date();
    
//     // Вычисляем количество дней между текущей датой и начальной датой
//     const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    
//     // Вычисляем количество выходных дней между начальной и текущей датой
//     const weekendsPassed = Math.floor((daysPassed + startDate.getDay()) / 7) * 2;
    
//     // Добавляем количество прошедших дней и вычитаем количество выходных дней
//     const currentDay = daysPassed - weekendsPassed + 1;
    
//     return currentDay;
//   }
  

// function LearningProgress() {

//     const navigate = useNavigate();


//     const goToTest = () => {
//         navigate('/test'); 
//       };
//     const totalDays = 10;
//     const currentDay = getCurrentDay();
//     const daysLeft = totalDays - currentDay;
//     const passedDays = totalDays - daysLeft ;
//     const goToLearn = () => {
//       navigate('/day$`{currentDay}`'); 
//     };
//     // Создаем массив букв для прогресса
//     const letters = ['D','R','O','P','O','M','A','N','I','A'].map((letter, index) => (index < currentDay ? letter : '_'));
  
//     return (
//         <>
//       <div className="learning-progress">
//         <p className='progress'>День: {currentDay}</p>
//         <p className='progress'>Осталось дней: {daysLeft}</p>
//         {/* <p className='progress'>Прогресс: {passedDays}</p> */}
//         </div>
//         <div className="progress-bar">
//          <p className='letters'> {letters.join(' ')}</p>
//           </div>

//         <button onClick={goToLearn} className='butGoToLearn'><p className='letters'>Перейти к текущему уроку</p></button>
//         <button onClick={goToTest} className='butGoToLearn'><p className='letters'>Перейти к тесту</p></button>
//       </>
//     );
//   }

  
//   export default LearningProgress;

import React from 'react';
import './learnStyles.css';
import { useNavigate } from 'react-router-dom';

function getCurrentDay() {
    const startDate = new Date('2024-04-22');
    const today = new Date();
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const weekendsPassed = Math.floor((daysPassed + startDate.getDay()) / 7) * 2;
    return Math.max(1, daysPassed - weekendsPassed + 1);
}

function LearningProgress() {
    const navigate = useNavigate();
    const totalDays = 10;
    const currentDay = getCurrentDay();
    const daysLeft = Math.max(0, totalDays - currentDay);
    const passedDays = totalDays - daysLeft;

    const goToLearn = () => {
        navigate(`/admPanel/day${currentDay}`);
    };

    const goToTest = () => {
        navigate('/test');
    };

    const letters = ['D', 'R', 'O', 'P', 'O', 'M', 'A', 'N', 'I', 'A'].map((letter, index) => (index < currentDay ? letter : '_'));

    return (
        <>
            <div className="learning-progress">
                <p className='progress'>День: {currentDay}</p>
                <p className='progress'>Осталось дней: {daysLeft}</p>
            </div>
            <div className="progress-bar">
                <p className='letters'> {letters.join(' ')}</p>
            </div>
            <button onClick={goToLearn} className='butGoToLearn' disabled={currentDay >= totalDays}>
                <p className='letters'>Перейти к текущему уроку</p>
            </button>
            <button onClick={goToTest} className='butGoToLearn'>
                <p className='letters'>Перейти к тесту</p>
            </button>
        </>
    );
}

export default LearningProgress;
