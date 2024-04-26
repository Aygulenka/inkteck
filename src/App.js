// App.js
import React from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import LearningModule from './components/LearningModule';
import TestModule from './components/TestModule';
import Header from './components/Header';
import AdmPanel from './components/AdmPanel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed BrowserRoute to BrowserRouter
import TextEditor from './components/TextEditor';
import Day1 from './components/days/Day1';
import Day3 from './components/days/Day3';
import Day4 from './components/days/Day4';
import Day5 from './components/days/Day5';
import Day6 from './components/days/Day6';
import Day7 from './components/days/Day7';
import Day8 from './components/days/Day8';
import Day9 from './components/days/Day9';
import Day10 from './components/days/Day10';
import Day2 from './components/days/Day2';
import FirstPage from './components/FirstPage';
import RegisterComponent from './components/login/Registration';
import LoginComponent from './components/login/LogIn';
import Dostup from './components/Dostup';
import DeleteUser from './components/login/DeleteUser';
import UserManagement from './components/UserManagment';

function App() {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='registration' element={<RegisterComponent/>}/>
          <Route path='login' element={<LoginComponent/>}/>
          
          <Route path="/mainScreen" element={<MainScreen />} /> {/* Removed element prop */}
          <Route path="/learn" element={<LearningModule />} /> {/* Removed element prop */}
          <Route path="/test" element={<TestModule />} /> {/* Removed element prop */}
          <Route path='managment' element={<UserManagement/>}/>
       <Route path="/admPanel" element = {<AdmPanel/>}/>
       <Route path='/admPanel/dostup' element = {<Dostup/>}/>
       <Route path="/admPanel/day1" element = {<Day1/>}/>
       <Route path="/admPanel/day2" element = {<Day2/>}/>
       <Route path="/admPanel/day3" element = {<Day3/>}/>
       <Route path="/admPanel/day4" element = {<Day4/>}/>
       <Route path="/admPanel/day5" element = {<Day5/>}/>
       <Route path="/admPanel/day6" element = {<Day6/>}/>
       <Route path="/admPanel/day7" element = {<Day7/>}/>
       <Route path="/admPanel/day8" element = {<Day8/>}/>
       <Route path="/admPanel/day9" element = {<Day9/>}/>
       <Route path="/admPanel/day10" element = {<Day10/>}/>

        </Routes>

    </div>
  );
}

export default App;
