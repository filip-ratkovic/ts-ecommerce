type ProductCardProps = {
    id:number,
    name:string,
    price:number,
    imgUrl:string  
}

function ProductCard({id, name,  price, imgUrl}:ProductCardProps) {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard