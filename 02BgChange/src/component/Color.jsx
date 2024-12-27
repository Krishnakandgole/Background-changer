import React,{useState} from 'react'

function Color() {

    const [color, setColor] = useState('black');
    
  return (
    <div className='w-full h-screen relative' style={{backgroundColor : color}} >
        <div className='absolute bottom-10 bg-white w-full text-center p-2'>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('red')}  style={{backgroundColor : 'red'}}>Red</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('blue')}  style={{backgroundColor : 'blue'}}>Blue</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('green')}  style={{backgroundColor : 'green'}}>Green</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('gold')}  style={{backgroundColor : 'gold'}}>Green</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('purple')}  style={{backgroundColor : 'purple'}}>Green</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('cyan')}  style={{backgroundColor : 'cyan'}}>Green</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('gray')}  style={{backgroundColor : 'gray'}}>Green</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-black' onClick={() => setColor('white')}  style={{backgroundColor : 'white'}}>Green</button>
            <button className='outline-none px-4 mx-2 py-1 rounded text-white' onClick={() => setColor('black')}  style={{backgroundColor : 'black'}}>Green</button>
        </div>
    </div>
  )
}

export default Color;