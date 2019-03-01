(function () {
  this.DataTest = function (dataFile, testOption) {
    this.source = dataFile;
    this.data   = null;
    this.option = testOption;
  }

  DataTest.prototype.setTest = function (test, callback) {
  	const reader = new FileReader();

    reader.onload = function (event) {
      const data = event.target.result;

      callback(test, JSON.parse(data));
    }

    reader.readAsText(test.source);
  }

  DataTest.prototype.runTest = function (test, JSONData) {
    test.data = JSONData;       

    const brokenData = new BrokenData(test.data);
    const validData = new ValidData(test.data);

    brokenData.recoverNames();
    brokenData.recoverPrices();
    brokenData.recoverQuantities();

    if (test.option == "recover") {
      test.showData(0);
    } else {
      validData.sort();

      (test.option == "sort") ? test.showData(0) : test.showData(validData.summary());      
    }
  }

  DataTest.prototype.showData = function (summary) {
    const data = this.data;
    const pre  = document.querySelector("pre");

    let preContent = (summary ? JSON.stringify(summary) : JSON.stringify(data));
        preContent = preContent.replace(/{/g, '{\n  ');
        preContent = preContent.replace(/:/g, ': ');
        preContent = preContent.replace(/,"/g, ',\n  "');
        preContent = preContent.replace(/},/g, '\n },\n ');
        preContent = preContent.replace(/}$/g, '\n}');
        preContent = preContent.replace(/}]/g, '\n }]');

    pre.innerHTML = preContent;
  }
}());