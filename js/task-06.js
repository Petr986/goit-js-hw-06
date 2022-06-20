let inputVal = document.getElementById("validation-input");
let totalLenght = inputVal.getAttribute("data-length");
let intTotalLenght = Number(totalLenght);

inputVal.oninput = function() {
  if(inputVal.value.length !== intTotalLenght) {
    inputVal.classList.add("invalid")
    inputVal.classList.remove("valid")
    return
  }

inputVal.classList.add('valid')
inputVal.classList.remove('invalid')
};