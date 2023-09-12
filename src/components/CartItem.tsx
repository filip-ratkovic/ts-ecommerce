import React from 'react'
import { useShoppingCard } from '../context/ShoppingCardContext'
import storeItems from '../data/items.json'
import { Button, Stack } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
    id: number,
    quantity : number
}
function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCard();
    const item = storeItems.find(i => i.id === id)

    if(item == null) {
        return null
    }

  return (
    <Stack direction='horizontal' gap={2}  style={{borderBottom:"1px solid lightgrey", padding:"5px"}}>
        <div className="me-auto d-flex flex-column align-items-center">
        <img src={item.imgUrl} alt="product" style={{width:"250px", objectFit:"cover", aspectRatio:"16/9"}}/>
            <div>
                {item.name}
            </div>
        </div>
        <div className="me-auto d-flex align-items-center gap-3">
            <Stack direction='horizontal' gap={1} >
            <Button variant='outlined' style={{fontSize:"28px", fontWeight:"400"}} onClick={()=> increaseCartQuantity(id)}>+</Button>
            <span style={{fontSize:"34px", fontWeight:"500"}}> {quantity}</span>  
            <Button  style={{fontSize:"28px", fontWeight:"400"}} variant='outlined' onClick={()=> decreaseCartQuantity(id)}>-</Button>
            </Stack >
        </div>

        <div className="me-auto">
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
        </div>

        <button  onClick={()=> removeFromCart(id)} 
        type="button" className="btn btn-danger border-0 px-2 py-0 align-items-center d-flex"> <span aria-hidden="true" className='h2'>&times;</span></button>

    </Stack>
    )
}

export default CartItem