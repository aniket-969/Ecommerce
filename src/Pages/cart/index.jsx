import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const data = useSelector(state => state.shopCart)
  // console.log(data);

  const cartData = JSON.parse(localStorage.getItem('cartData'))
  // console.log(cartData);
  const filteredCartData = cartData.filter(item => data.includes(item.id));
console.log(filteredCartData);

  return (
    <>
     {filteredCartData.map((product)=>(
      <div key={product.id}>
        {product.title}
          <img src={product.img} />
          Price:${product.price}
          Amount:{product.amount}
      </div>
     ))}
    </>
  )
}

export default Cart