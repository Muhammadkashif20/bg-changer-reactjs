import React, { useState } from 'react';

const App = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#1ABC9C', '#D35400', '#2C3E50', '#3498DB']; 
const [color,setColor]=useState("")
  const colorChange=(color)=>{
    console.log(color);
    setColor(color)
  }
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Background Color Changer ReactJs</h1>
      <div className="flex space-x-4 mb-6">
        {colors.map((color) => (
          <button
            onClick={(()=>colorChange(color))}
            className="w-10 h-10 rounded-full"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      <div className="w-80 h-52 border-2 border-gray-300 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            
            <p className="text-lg text-white font-bold italic" >Preview Area</p>
      </div>
    </div>
  );
};

export default App;
