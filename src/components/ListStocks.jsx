import { useState } from "react"

function ListStocks() {
    const [del, setDel] = useState(false)

    const listTicker = JSON.parse(localStorage.getItem('listTicker'))
    console.log(listTicker)

    const deleteStock = (item) => {
        const newList = listTicker.filter((stock)=> {
            return stock.request_id !== item.request_id
        })

        console.log(newList);
        localStorage.setItem('listTicker', JSON.stringify([...newList]));
        setDel(!del);
    }


    var savedList;
    if (listTicker){
    savedList = listTicker.map((item, index) => {
        return ( 
            <div key={index} className="relative my-2.5 mx-0 px-0 py-3">
                {listTicker && <p className='text-white text-4xl font-bold'>{item.ticker}</p> }
                <div className='w-4/5 my-0 mx-auto flex justify-center' key={index}>
                    <div className='bg-slate-500 text-green-200 my-2.5 mx-0 pt-5 pb-2.5 relative h-48 w-80'>
                        <div className="text-white mb-3">{item.date}</div>
                        <div className="text-7xl">{item.results[0].c}</div>
                        <button className="absolute cursor-pointer top-2.5 right-3" onClick={() => {deleteStock(item)}}>X</button>
                    </div>
                </div>
            </div>
        )
    })
}else{
    savedList = <div className="text-white relative my-2.5 mx-0 px-0 py-3">No Saved Stock Yet</div>
}


    return (
        savedList
    )
}

export default ListStocks