
import React from 'react'
export default function DiceComponent(props) {
  return (
    <>
    {/* {props.num === 1 && ( */}
    <img src={props.src}  style={{ width: '6rem' , height : '6rem' , display :'flex' , position :'relative' , left : '5vw'}} alt='dice-1' />
    {/* )}
    {props.num === 1 && (
    <img src={props.src}  style={{ width: '6rem' , height : '6rem' }} alt='dice-1' />
    )}
    {props.num === 1 && (
    <img src={props.src}  style={{ width: '6rem' , height : '6rem' }} alt='dice-1' />
    )} */}

    </>
   
  )
}
