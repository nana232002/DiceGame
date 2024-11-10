import React, { useState } from 'react'
import './Game.style.css'
import PlayerComponent from '../player/Player.component'
import DiceComponent from '../images/Dice.Component'
import dice1 from '../images/dice-1.png';
import dice2 from '../images/dice-2.png';
import dice3 from '../images/dice-3.png';
import dice4 from '../images/dice-4.png';
import dice5 from '../images/dice-5.png';
import dice6 from '../images/dice-6.png';
import backgroung from '../images/background.avif'
import ButtonsComponent from './Buttons.component';
export default function GameComponent() {
  const[ImageNums , changeImageNums]=useState([1,1]);
  const[currentTargets ,changeCurrentTarget]=useState([0,0]);
  const[sums , changeSums]=useState([0,0]);
  const[playerTurn,changePlayerTurn]=useState(1);
  const[number,changenumber]=useState(0);
  
  const diceImage =[dice1,dice2,dice3,dice4,dice5,dice6];

  return (
    <>
    <div className='container'> 
      <img src={backgroung} className='imgbackground'></img>
        <div className='center'>
            
        <PlayerComponent playerNum={1} Sum={sums[0]} CurrentTarget={currentTargets[0]} turn={playerTurn} />
        <DiceComponent  src ={diceImage[ImageNums[0]-1]}/>
        <DiceComponent  src ={diceImage[ImageNums[1]-1]}/>
        <PlayerComponent playerNum={2} Sum={sums[1]} CurrentTarget={currentTargets[1]} turn={playerTurn}  />

        </div>
        <ButtonsComponent  changeImageNums={changeImageNums} 
        changePlayerTurn ={changePlayerTurn} turn={playerTurn} 
        changeCurrentTarget={changeCurrentTarget} changeSums={changeSums} 
        currentTargets={currentTargets} Sums={sums}
        number={number} changenumber={changenumber}/>
    </div>
    </>
    
  );
}
