import React from 'react'
import arrShoe from "./data/data"

const ProductList = ({ listShoe, updateShoe, showDetail }) => {

    return listShoe.map((item, index) => {
        return (
            <div className='shadow-xl p-4 bg-orange-50 rounded-xl hover:bg-orange-100 duration-700 border hover:border-orange-600' key={index}>
                <div className='bg-orange-200 h-max rounded-2xl mb-3'>
                    <img src={item.image} alt="" />
                </div>
                <div className='mb-2 min-h-20 text-center'>
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <p className='text-lg font-bold mb-2'>{item.price} $</p>
                </div>

                <div className='mb-2 text-center'>
                    <button className="py-2 px-5 bg-orange-500 transition-all hover:bg-orange-700 hover:animate-pulse rounded-md hover:text-white" onClick={() => {
                        updateShoe(item); showDetail();
                    }}>Xem ngay</button>
                </div>
            </div>
        )
    })

}

export default ProductList