import React, { useState } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import arrShoe from './data/data'

const ShoesStore = () => {
    let [shoe, setShoe] = useState(arrShoe[0]);
    const [show, setShow] = useState("hidden");
    function updateShoe(shoe) {
        setShoe(shoe);
    }

    function showDetail() {
        setShow("block");
    }

    return (
        <>
            <div className="container pt-10 w-8/12 hover:animate-spin-slow-one">
                <div className={show}>
                    <Modal shoe={shoe} />
                </div>
            </div>
            <div className='container py-10'>
                <div className='grid grid-cols-4 gap-y-5 gap-x-5'>
                    <ProductList updateShoe={updateShoe} showDetail={showDetail} listShoe={arrShoe} />
                </div>
            </div>

        </>
    )
}

export default ShoesStore