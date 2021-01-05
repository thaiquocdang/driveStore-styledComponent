import React, { useEffect } from 'react'
// import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import { AllState } from '../type/Store'

const HomeScreen = () => {
  const dispatch = useDispatch() // insteach of using connect, mapStateToProp

  const productList: AllState['productList'] = useSelector((state: AllState) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    // const fetchProducts = async () => {
    //   /* //first way to define data
    //   const res = await axios.get('/api/products')
    //   console.log(res.data, 'products data from backend');
    //   setProducts(res.data)
    //   */

    //   // const { data } = await axios.get('/api/products')
    //   // setProducts(data)
    // }
    // fetchProducts()
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {products ? (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : error ? (
        <h3>{error}</h3>
      ) : loading ? (
        <Loader />
      ) : null}
    </>
  )
}

export default HomeScreen
