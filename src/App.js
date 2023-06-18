import { useState } from 'react'
import Arrow from './assets/images/icon-arrow.svg'
import './App.css';

function App() {
  
  let arrow = document.getElementById('arrowimage')

  const [d1, setD1] = useState("");
  const [m1, setM1] = useState("");
  const [y1, setY1] = useState("");

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  let d3 = document.getElementById('--2')
  let m3 = document.getElementById('--')
  let y3 = document.getElementById('--purple')
  
  if(d1 > d2){
  	d2 = d2 + month[m2 - 1];
  	m2 = m2 - 1;
  }
  
  if(m1 > m2){
  	m2 = m2 + 12;
  	y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  let yInt = parseInt(y)
  let mInt = parseInt(m)
  let dInt = parseInt(d)


  function changeArrow() {
    if (arrow?.className === 'arrowBlack') {
      arrow.classList.remove('arrowBlack')

      y3.innerHTML = `${yInt}`
      m3.innerHTML = `${mInt}`
      d3.innerHTML = `${dInt}`

      return arrow.classList.add('arrowPurple');

    } else if (arrow?.className === 'arrowPurple'){
      arrow.classList.remove('arrowPurple')
      
      y3.innerHTML = `--`
      m3.innerHTML = `--`
      d3.innerHTML = `--`

      return arrow.classList.add('arrowBlack');
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="age">
          <div className="age1">
            <h3>DAY</h3>
            <input 
              type="text" 
              id="age1text" 
              placeholder="DD"
              onChange={event => setD1(event.target.value)}
              />
          </div>
          <div className="age2">
            <h3>MONTH</h3>
            <input 
              type="text" 
              id="age2text" 
              placeholder="DD"
              onChange={event => setM1(event.target.value)}
            />
          </div>
          <div className="age3">
            <h3>YEAR</h3>
            <input 
              type="text" 
              id="age3text" 
              placeholder="DD"
              onChange={event => setY1(event.target.value)}
            />
          </div>
        </div>
        <img src={Arrow} alt="#" id='arrowimage' className='arrowBlack' onClick={changeArrow}/>
        <div className="years">
          <div className="yearsText">
            <h1 id='--purple'>--</h1>
            <h1>years</h1>
          </div>
          <div className="yearsText">
            <h1 id='--'>--</h1>
            <h1 id='monthsDays'>months</h1>
          </div>
          <div className="yearsText">
            <h1 id='--2'>--</h1>
            <h1 id='monthsDays2'>days</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
