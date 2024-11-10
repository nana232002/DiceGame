import React from 'react'
import './Buttons.style.css'

export default function ButtonsComponent(props) {
  return (
    <>
    
    <button className='button' onClick={()=>{
      
      {props.Sums[0] >= props.number && alert("Player 1 wins")}
      {props.Sums[1] >= props.number && alert("Player 2 wins")}
        const num1 = RandomDice();
        const num2 = RandomDice();
        {props.turn ===0? 
       ( props.changeCurrentTarget((prevTargets) => {
          const newTargets = [...prevTargets]; 
          newTargets[0] += num1; 
          newTargets[0] += num2;
          return newTargets; 
        }))
        :
        (props.changeCurrentTarget((prevTargets) => {
          const newTargets = [...prevTargets]; 
          newTargets[1] += num1; 
          newTargets[1] += num2;
          return newTargets; 
        }));
      }
       
        props.changeImageNums([num1,num2]);
        {num1 === 6 && num2 === 6 && equalSix(props)}

    }}> Roll</button>
    <button  className ='button' onClick={()=>{
      console.log(props.number);
      
      {props.Sums[0] >= props.number && alert("Player 1 wins")}
      {props.Sums[1] >= props.number && alert("Player 2 wins")}
      {props.turn ===1 ?  props.changePlayerTurn(0) :  props.changePlayerTurn(1)}
      props.changeSums((prevsum)=>{
        const newSum =[...prevsum];
        newSum[0]+=props.currentTargets[0];
        newSum[1]+=props.currentTargets[1];
        return newSum;
      });
      props.changeCurrentTarget([0,0]);
      
    }}
    
    
    > Hold</button>
  

  <div>
  <input type='number' name='inputNum' placeholder='Insert the target'  onChange={(event)=>{
    props.changenumber(event.target.value);
  }}/>
    <button className='button' id='start' onClick={()=>{
      props.changeSums([0, 0]);
      props.changePlayerTurn(0);  
      props.changeCurrentTarget([0, 0]); 
    }}
    >start</button>
  </div>
    </>
   
  );
}

function RandomDice(){
 return Math.floor(Math.random() * 6) + 1;
}
function equalSix(props) {
  if (props.turn === 0) {
    
    props.changeSums([0, props.Sums[1]]);
    props.changePlayerTurn(1);  
    props.changeCurrentTarget([0, 0]); 
  } else {
   
    props.changeSums([props.Sums[0], 0]);
    props.changePlayerTurn(0);  
    props.changeCurrentTarget([0, 0]); 
  }
}
