import React from 'react'
import { useSelector } from 'react-redux'

function SaveButton() {
    const {stock} = useSelector(state => state.stock)


    
    const listTicker = JSON.parse(localStorage.getItem('listTicker'))

    const onClick = () => {
        if(listTicker) localStorage.setItem('listTicker', JSON.stringify([...listTicker, {...stock, date: new Date().toLocaleString('en-US')}]))
        if(!listTicker) localStorage.setItem('listTicker', JSON.stringify([{...stock, date: new Date().toLocaleString('en-US')}]))       
    }
    return (
        <div>
            <button className="bg-slate-900 text-green-500 mt-3 py-3 px-5 rounded-lg" onClick={onClick}>Save</button>
        </div>
    )
}

export default SaveButton