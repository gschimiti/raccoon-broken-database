const JSONFile = document.getElementById("JSONFile");

JSONFile.addEventListener("change", function () {
  const fieldset = this.parentNode;
  const label    = document.querySelector("label[for='JSONFile']");

  if (fieldset.classList.contains("invalid")) 
    fieldset.classList.remove("invalid");

  label.innerHTML = this.value.split(/(\\|\/)/g).pop();
});

const radioButtons = document.querySelectorAll("input[type='radio']");

for (let i = 0; i < radioButtons.length; ++i) {
  radioButtons[i].addEventListener("click", function () {
    const fieldset = document.querySelectorAll("fieldset");

    fieldset[fieldset.length-1].classList.remove("invalid");          
  });
}

function doTest() {
  const JSONFile = document.getElementById("JSONFile");
  const option   = document.querySelector("input[type='radio']:checked");

  if (!JSONFile.value) JSONFile.parentNode.classList.add("invalid");

  if (!option) {
    const fieldset = document.querySelectorAll("fieldset");

    fieldset[fieldset.length-1].classList.add("invalid");
  }

  if (JSONFile.value && option) {
    const test = new DataTest(JSONFile.files[0], option.value);

    test.setTest(test, test.runTest);
  }
}