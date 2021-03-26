const isosceles = "This is an isosceles triangle, precious. We do not wants it."
const scalene = "This is a scalene triangle, precious. We do not wants it."
const equilateral = "This is an equilateral triangle, precious. We do not wants it."
const notATriangle = "This is not a triangle, precious. Give us a triangle, precious. GIVE IT TO USSS!"

$(document).ready(function(event) {
  $("#triangleInput").submit(function(event) {
    const side1 = parseInt($("#side1").val())
    const side2 = parseInt($("#side2").val())
    const side3 = parseInt($("#side3").val())

    if (side1 === side2 === side3) {
      alert(equilateral)
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      alert(scalene)
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      alert(isosceles)
    } else {
      alert(notATriangle)
    }

    event.preventDefault()
  })
})