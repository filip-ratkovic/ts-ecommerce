import React from 'react'
import { Card, Container, Stack } from 'react-bootstrap'
import { useShoppingCard } from '../../context/ShoppingCardContext'
import CartItem from '../../components/CartItem'
import { formatCurrency } from '../../utilities/formatCurrency'
import storeItems from '../../data/items.json'
import './cart.css'


function Cart() {
    const {cartItems} = useShoppingCard()
  return (
 <Container className='p-3' style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
     <Card className='card-container'>
    <Card.Header className='d-flex justify-content-center' >
        Cart
    </Card.Header>
    <Card.Body>
        <Stack gap={3} style={{width:"100%"}}>
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
 </Container>
  )
}

export default Cart