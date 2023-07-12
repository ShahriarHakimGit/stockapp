import { useState } from "react";
import {useDispatch} from 'react-redux'
import { fetchStock } from "../store/slices/stockSlice";

function StockForm() {
    const [stock, setStock] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        //dispatch function or rtk stuff
        dispatch(fetchStock(stock));
        setStock('');
    }
    const onChange = (e) => {
        setStock(e.target.value);
    }

   

    return (
        <form className="w-3/5 mx-auto" onSubmit={onSubmit}>
            <div className="mb-10">
                <label htmlFor="text" className="text-left block mt-0 ml-0.5 mb-1 mr-0 text-white">Ticker</label>
                <label className="text-left block text-xs text-green-200"> Ex: AAPL, TSLA</label>
                <input type="text" className="w-full p-2.5 mb-2.5 rounded-md border-2 border-indigo-500/100" value={stock} onChange={onChange}/>
                <button type="submit"  className="text-white bg-slate-600 my-2 p-2 rounded-full hover:bg-slate-400">Get Recent Stock</button>
            </div>
        </form>
  )
}

export default StockForm