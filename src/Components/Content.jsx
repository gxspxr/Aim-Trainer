import React, { useState } from 'react';
import useSound from 'use-sound';
import sound from "../Resources/soundbtn.mp3"
import errorbtn from "../Resources/errorbtn.mp3"
const Content = () => {
  const [play] = useSound(sound);
  const [playError] = useSound(errorbtn);
  const [circleVisible, setCircleVisible] = useState(true);
  const [points, setPoints] = useState(0);
  const [circlePosition, setCirclePosition] = useState({
    top: '50%',
    left: '50%',
  });
  const [bgColor, setBgColor] = useState('bg-base');
  const[circleColor, setCircleColor] = useState('bg-red-500')
  const [misses, setMisses] = useState(0);

   
   const handleMisses = (event) => {
    if (event.target.tagName.toLowerCase() === 'section') {
      setMisses(misses + 1);
      playError();
    }
  };

  const handlePoints = () => {
    setPoints(points + 1);
  };

  const handleReset = () => {
    setPoints(0);
    setMisses(0);
    setCirclePosition({
      top: '50%',
      left: '50%',
    });
  };

  const handleSound = () => {
    play();
  };

  const handleClick = () => {
    const randomTop = `${Math.floor(Math.random() * 70 + 10)}%`;
    const randomLeft = `${Math.floor(Math.random() * 70 + 10)}%`;

    setCircleVisible(false);

    setTimeout(() => {
      setCircleVisible(true);
      setCirclePosition({
        top: randomTop,
        left: randomLeft,
      });
    }, 100);
    handlePoints();
    handleSound();

  };

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleCircleChange=(event)=>{
    setCircleColor(event.target.value)
  }

  


  return (
    <div className="">
       <h1 className='flex justify-center align-middle text-white text-3xl'>AIM<span className="text-emerald-500">TRAINER</span></h1>
      <section onClick={handleMisses} className={`cursor-crosshair border-solid border-2 border-gray-95 h-[33em] w-[84em] relative overflow-hidden ${bgColor}`}>
        {circleVisible && (
          <div
            className={`h-10 w-10 rounded-full absolute ${circleColor} border-solid border-black border`}
            style={{
              top: circlePosition.top,
              left: circlePosition.left,
              maxHeight: '100%',
            }}
            onClick={handleClick}
          ></div>
        )}
        
      </section>

      <div className="flex justify-center align-middle ">
        <div className="text-green-500 text-xl mr-2">
          Score: {points}
        </div>
        <div className="text-red-500 text-xl">
          Misses: {misses}
        </div>
        <div className="text-white text-xl ml-[1em]">
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-1 rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div>
          <span className="text-white text-xl ml-[1em] ">Background Color:</span>
          <select
            className=" rounded-md text-white bg-gray-700 px-1 ml-[1em]"
            value={bgColor}
            onChange={handleColorChange}
          >
            <option value="bg-base">Default</option>
            <option value="bg-white">White</option>
            <option value="bg-black">Black</option>
            <option value="bg-blue-500">Blue</option>
            <option value="bg-yellow-500">Yellow</option>
          </select>
        </div>
        <div>
          <span className="text-white text-xl ml-[1em] ">Circle Color:</span>
          <select className=" rounded-md text-white bg-gray-700 px-1 ml-[1em]" value={circleColor} onChange={handleCircleChange}  >
          <option value="bg-red-500">Red</option>
            <option value="bg-green-500">Green</option>
            <option value="bg-purple-500">Purple</option>
            <option value="bg-blue-500">Blue</option>
            <option value="bg-yellow-500">Yellow</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Content;
