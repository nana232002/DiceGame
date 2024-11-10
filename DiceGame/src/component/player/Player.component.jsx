import React from 'react'
import './Player.style.css'

export default function PlayerComponent(props) {
  return ( 
    <>
    <div className='contain'>
        <div >
        <p className='player'> Player {props.playerNum}</p>
        <label className='sum'>{props.Sum}</label>
        </div>
        <div>
        <p>current target = &nbsp;
        <label className='currentTarget'>{props.CurrentTarget}</label>
        </p>
        
        </div>
    </div>
    </>
  );
}
