module.exports = {
  value(product) {
    if (product.discount) {
      return product.discount * product.price
    }
    return product.price
  }
}