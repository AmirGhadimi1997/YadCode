import { useState } from 'react';



function Mahshad_Box() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };



  const [num, setNum] = useState(0);

  const handleClick2 = () => {
    setNum(num + 1);
  };


  
  const [number, setNumber] = useState(0);

  const handleClick3 = () => {
    setNumber(number + 1);
  };




  return (
    <div className='flex justify-center mt-5 px-52 '>
      <div className='w-7/12 h-52 bg-primary grid grid-cols-12 rounded-2xl '>

        <div className='h-52  col-span-4 flex flex-col justify-center items-center'>
           <p className='text-green-800  text-xl mt-2'>ذکر صلوات</p>
           <p className='text-green-800  text-xl mt-2'>{count}</p>
           <button onClick={handleClick} className='w-14 h-12 border-2 border-lime-500 text-3xl mt-2 rounded-md hover:bg-accent'>+</button>
        </div>
        
        <div className='h-52  col-span-4 flex flex-col justify-center items-center'>
           <p className='text-green-800 text-xl mt-2'>قرائت فاتحه</p>
           <p className='text-green-800 text-xl mt-2'>{num}</p>
           <button onClick={handleClick2} className='w-14 h-12 border-2 border-lime-500 text-3xl mt-2 rounded-md hover:bg-accent'>+</button>
        </div>

        <div className='h-52  col-span-4 flex flex-col justify-center items-center'>
           <p className='text-green-800 text-xl mt-2'>خواندن قرآن</p>
           <p className='text-green-800 text-xl mt-2'>{number}</p>
           <button onClick={handleClick3} className='w-14 h-12 border-2 border-lime-500 text-3xl mt-2 rounded-md hover:bg-accent'>+</button>
        </div>

      </div>
    </div>
  )
}

export default Mahshad_Box
