import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';


function Stock() {
  const {stock, isLoading} = useSelector((state) => {
    return state.stock
  });
  
  if(isLoading) return <Spinner/>
  

  return (
    <>
      {stock && <p className='text-white text-4xl font-bold'>{stock.ticker}</p>}
      <div className='w-4/5 my-0 mx-auto flex justify-center'>
        <div className='bg-slate-500 text-green-200 my-2.5 mx-0 pt-5 pb-2.5 relative h-48 w-80 text-7xl'>
          {stock && stock.results[0].c}
        </div>
      </div>
    </>
  )
}

export default Stock