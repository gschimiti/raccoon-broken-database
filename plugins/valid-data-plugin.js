(function () {
  this.ValidData = function (databaseData) {
    this.source = databaseData;
  }

  ValidData.prototype.sort = function () {
    const source = this.source;

    const compareProducts = function (firstProduct, secondProduct) {
      return firstProduct.category == secondProduct.category ? 
             firstProduct.id - secondProduct.id :
             firstProduct.category.localeCompare(secondProduct.category);
    }

    source.sort(compareProducts);
  }

  ValidData.prototype.summary = function () {
    const source = this.source;

    const productStock = {};

    for (let i = 0; i < source.length; ++i) {
      const category = source[i].category;
      const quantity = source[i].quantity;
      const price    = source[i].price;

      category in productStock ? 
      productStock[category] += quantity * price :
      productStock[category] = quantity * price;
    }

    return productStock;
  }
}());