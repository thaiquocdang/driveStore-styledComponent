import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc   Fetch all products
//@route   GET /api/products
//@access   Public (everyone can access) --- another is Private (when login)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}) //empty object to return everything
  // res.status(401)
  // throw new Error('Not Authorized')
  res.json(products)
})

//@desc   Fetch single product
//@route   GET /api/products/:id
//@access   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found') //using when we have errorhandler
  }
})

//@desc   Delete product
//@route   DELETE /api/products/:id
//@access   Private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc   Create a product
//@route   POST /api/products
//@access   Private/admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample',
    price: 0,
    user: req.user._id,
    image: '/images/Derive-logo.png',
    brand: 'Derive',
    category: 'Default',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

//@desc   Update a product
//@route   PUT /api/products/:id
//@access   Private/admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    desciption,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.desciption = desciption
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updateProduct = await product.save()
    res.json(updateProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
}
