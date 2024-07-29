import React from 'react'

const Modal = ({ shoe }) => {
    return (
        <div className='flex shadow-xl p-10 bg-orange-400 rounded-xl justify-center gap-10'>
            <div className='w-5/12'>
                <img src={shoe.image} alt="" />
            </div>
            <div className='w-6/12'>
                <h3 className="font-bold text-4xl mb-5">{shoe.name}</h3>
                <p className='text-2xl mb-5'>Only {shoe.price} <span className='font-bold text-orange-800'>$</span></p>
                <p className='text-2xl mb-5'>{shoe.quantity} <span className='font-bold text-orange-800'>pcs</span></p>
                <p className='mb-5'>{shoe.description}</p>

            </div>
        </div>
    )
}

export default Modal