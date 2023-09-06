import React from 'react'
import storeItems from "../../data/items.json";
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';

function Products() {
  return (
    <div>
    <h1>Products</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
      {storeItems.map(item => (
        <Col key={item.id}>
         <ProductCard {...item}/>
        </Col>
      ))}
    </Row>
  </div>
  )
}

export default Products