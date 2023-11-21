import React , { useState , useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import meet from "./meetify2.png"

const Video = () => {

  const [ value , setValue ] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
      navigate((`/room/${value}`))
  }, [ navigate , value ])

  return (
  <div className='join'>
    <img src={meet} height={100}/>
    <input 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
    type='text' 
    placeholder='Enter Room Code'/>
    <button onClick={handleJoinRoom}>Join</button>
  </div>
  );
};

export default Video