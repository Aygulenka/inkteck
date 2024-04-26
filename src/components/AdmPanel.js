import React from 'react';
import './Panel.css'
import { Link, useNavigate } from 'react-router-dom';
import Day1 from './days/Day1';
import Day2 from './days/Day2';
import Day3 from './days/Day3';
import Day4 from './days/Day4';
import Day5 from './days/Day5';
import Day6 from './days/Day6';
import Day7 from './days/Day7';
import Day8 from './days/Day8';
import Day9 from './days/Day9';
import Day10 from './days/Day10';

function AdmPanel(){
const navigate= useNavigate()
    const goToEditor = ()=>{
        navigate('days')
    }
    const datDostup = ()=>{
        navigate('/managment')
    }
    return(
        <>
        <div className='panelsButtons'>
            панель
            {/* <button>Dat dostyp ko dny</button> */}
            <button onClick={datDostup}>Dat dostup ko vsei programme</button>
            <button>Dobavit test</button>
<button>Redaktirovat test</button>
<button>Proverit test</button>
<button>Dobavit studentov</button>
            <button>Sdelat adminom</button>

        </div>
        <div className='days'>
            <Link to='day1' className='day'>
            <Day1/>
            </Link>
            <Link to='day2' className='day'>
            <Day2/> 
            </Link>
            <Link to='day3' className='day'>
            <Day3/>
            </Link>
            <Link to='day4' className='day'>
            <Day4/>
            </Link>
            <Link to='day5' className='day'>
            <Day5/>
            </Link>
            <Link to='day6' className='day'>
            <Day6/> 
            </Link>
            <Link to='day7' className='day'>
            <Day7/>
            </Link>
            <Link to='day8' className='day'>
            <Day8/>
            </Link>
            <Link to='day9' className='day'>
            <Day9/>
            </Link>
            <Link to='day10' className='day'>
            <Day10/> 
            </Link>
       </div>
</>
    )
}

export default AdmPanel;