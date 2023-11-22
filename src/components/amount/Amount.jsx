import React from 'react'
import { useState, useEffect } from 'react';

const Amount = ({ id, cartData }) => {
    const [amount, setAmount] = useState(null);

    useEffect(() => {
       
        const selectedItem = cartData.find(item => item.id === id);

        if (selectedItem) {
            setAmount(selectedItem.amount);
        } else {
            setAmount(null); 
        }
    }, [ cartData]);


    return (
        <>
            {amount !== null ? (
                <p>{amount}</p>
            ) : (
                <p>0</p>
            )}

        </>
    )
}

export default Amount