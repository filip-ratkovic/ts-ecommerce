import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCard } from "../context/ShoppingCardContext"

type ProductCardProps = {
    id:number,
    name:string,
    price:number,
    imgUrl:string  
}

function ProductCard({id, name,  price, imgUrl}:ProductCardProps) {
  const {getItemQuantity, increaseCartQuantity, removeFromCart} = useShoppingCard();
  const quantity = getItemQuantity(id)
  return (
   <Card>
    <Card.Img 
    variant="top"
    src={imgUrl} height="200px" 
    style={{objectFit:"cover"}}
    />
    <Card.Body className="d-flex  flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
       {quantity === 0 ?
         <div className="mt-auto">
         <Button className="w-100" onClick={()=> increaseCartQuantity(id) }>Add to cart</Button>
       </div> :
        <div className="mt-auto">
        <Button className="w-100" onClick={()=> removeFromCart(id) }>Remove from cart</Button>
      </div>
       }
      
    </Card.Body>
   </Card>
  )
}

export default ProductCard