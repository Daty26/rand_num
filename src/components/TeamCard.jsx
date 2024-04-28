import { useState } from 'react'

export default function TeamCard(props) {
    const teamNum = props.index +1
  return (
    <>
        {props.teams.length > 0 ? (
             <div className="card">
             <h4 className='text-center'>{teamNum}</h4>
             <p>{teamNum} - <span> </span>
                {props.teams.map((player, index) =>(
                    <span key={index}>{player}{index === 4 ? "." : ", "}</span>
                )
                )}
             </p>
         </div>
        ) : ""}
        
    </>
  )
}
