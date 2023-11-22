import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../config/config'
import { customReactQuery } from '../../api/products'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removesingleItem,shopToCart,removeCart
} from '../../features/cart/cartSlice'
import Amount from '../../components/amount/Amount'

const Shop = () => {

  const [user] = useAuthState(auth)

  const dispatch = useDispatch()
  const { products, loading, error } = customReactQuery('https://dummyjson.com/products?limit=10')

  const data = useSelector(state => state.cart)
 
localStorage.setItem('cartData', JSON.stringify(data))
    

  if (!user) {
    return (
      <div>
        User not signed in
      </div>
    )
  }

  if (loading) {
    return <>
      Loading .....
    </>
  }

  const cartData = JSON.parse(localStorage.getItem('cartData'))

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
          <img src={product.thumbnail} />
          Price:${product.price}
          <button onClick={() => dispatch(shopToCart(product.id))}>Add to cart</button>
          <div className="add-buttons">
            <button onClick={() => dispatch(addToCart(product))}>+</button>

            <Amount id={product.id} cartData={cartData} />

            <button onClick={() => dispatch(removesingleItem(product))}>-</button>
          </div>

        </div>
      ))}
    </>
  )
}

export default Shop