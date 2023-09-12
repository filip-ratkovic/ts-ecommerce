import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import { useShoppingCard } from '../../context/ShoppingCardContext'
import CartItem from '../../components/CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'
import storeItems from '../../data/items.json'


function Cart() {
    const {cartItems} = useShoppingCard()
  return (
 <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
     <Card className='w-50 h-100 d-flex justify-content-center'>
    <Card.Header className='d-flex justify-content-center' >
        Cart
    </Card.Header>
    <Card.Body>
        <Stack gap={3}>
            {cartItems.map(item => {
                return( <CartItem key={item.id} {...item}/>)
            })}
             <div className='ms-auto fw-bold fs-5'>
                Total: {''}
        {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
        </div>
        </Stack>
    </Card.Body>
  </Card>
 </div>
  )
}

export default Cart