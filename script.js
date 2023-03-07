let total = document.getElementById("total")
let remaining = document.getElementById("remaining")
let input = document.getElementById("input")
let input1 = input.value
let count = 0
// let count = input.value.length 
input.addEventListener('input', function() {
  update();

})
// update()

function update() {
  let count = input.value.length
  total.textContent = `Total Character :  ${count}`

  remaining.textContent = `Remaining ${input.getAttribute("maxLength") - Number.parseInt(input.value.length)}`;
  // console.log(typeof )

}

// Number.parseInt(input.getAttribute("maxLength"))