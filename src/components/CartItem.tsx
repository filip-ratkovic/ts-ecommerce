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
    const {removeFromCart, increaseCartQuantity, decreaseCartQuantity, cartItems} = useShoppingCard();
    const item = storeItems.find(i => i.id === id)

    if(item == null) {
        return null
    }

  return (
    <Stack direction='horizontal' gap={2}>
        <img src={item.imgUrl} alt="product image" style={{width:"250px", objectFit:"cover", aspectRatio:"16/9"}}/>
        <div className="me-auto">
            <div>
                {item.name}
            </div>
        </div>
        <div className="me-auto d-flex ">
            <div>
               x {quantity}
            </div>
            <Stack direction='vertical' gap={1} >
            <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
            <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
            </Stack >
        </div>

        <div className="me-auto">
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
        </div>

        <Button onClick={()=> removeFromCart(id)}>X</Button>

    </Stack>
    )
}

export default CartItem