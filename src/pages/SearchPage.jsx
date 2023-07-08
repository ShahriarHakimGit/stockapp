import StockForm from '../components/StockForm';
import Stock from '../components/Stock';
import { useState } from 'react';

function SearchPage() { 

  return (
    <div>
      <StockForm/>
      <Stock/>
    </div>
  )
}

export default SearchPage