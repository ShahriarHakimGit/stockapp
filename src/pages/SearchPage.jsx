import StockForm from '../components/StockForm';
import Stock from '../components/Stock';
import SaveButton from '../components/SaveButton'
import { useSelector } from 'react-redux';

function SearchPage() { 
  const {stock, isLoading} = useSelector((state) => {
    return state.stock
  });


  if(stock?.queryCount === 0) return <div className='text-white mt-5 text-5xl'>
    <p>Error, Please Use Correct Ticker</p>
    <button className='bg-slate-600 text-red-400 m-1 p-5 hover:bg-slate-400' onClick={() => {window.location.reload()}}>Reload Page</button>
  </div>

  return (
    <div>
      <StockForm/>
      <Stock/>
      <SaveButton/>
    </div>
  )
}

export default SearchPage