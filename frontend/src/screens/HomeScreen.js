import React from 'react'
import products from '../products'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
    <h1>Spring Essentials</h1>
    <Row>
      {products.map(p => (
        <Col sm={12} md= {6} lg={4} x1={3}>
          <Product product={p} />
        </Col>

        ))
      }
    </Row>
    </>
   
  )
}

export default HomeScreen