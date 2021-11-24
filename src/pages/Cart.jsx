import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import numberWithCommas from '../utils/numberWithCommas'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
const Cart = () => {
    const cartItems= useSelector((state)=>state.cartItems.value)
    const [cartProducts,setCartProducts]=useState([])
    const [totalProducts,setTotalProducts]=useState(0)
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(()=>{
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalProducts(cartItems.reduce((total,item)=>total+(Number(item.quantity)),0))
        setTotalPrice(cartItems.reduce((total,item)=>total+(Number(item.quantity)*Number(item.price)),0))
    },[cartItems])
    console.log(cartProducts)
    return (
        <Helmet title='Giỏ hàng'>
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size='block'>đặt hàng</Button>
                        <Link to='/catalog'>
                            <Button size='block'>tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item,index)=>(
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
