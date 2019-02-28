(function () {
  this.BrokenData = function (databaseData) {
    this.source = databaseData;
  }

  BrokenData.prototype.recoverNames = function () {
    const source = this.source;
          
    const charMap = {
      "\u00E6" : "\u0061",
      "\u00A2" : "\u0063",
      "\u00F8" : "\u006F",
      "\u00DF" : "\u0062"
    };

    for (let i = 0; i < source.length; ++i) {
      for (key in charMap) {
        const regex = new RegExp("" + key + "", "g");

        source[i].name = source[i].name.replace(regex, charMap[key]);
      }
    }
  }

  BrokenData.prototype.recoverPrices = function () {
    const source = this.source;

    for (let i = 0; i < source.length; ++i)
      source[i].price = Number(source[i].price);
  }

  BrokenData.prototype.recoverQuantities = function () {
    const source = this.source;

    for (let i = 0; i < source.length; ++i)
      if (!("quantity" in source[i])) source[i].quantity = 0;
  }
}());