let weight = 120
let height = 1.72

let bmi = weight / (height * height)

if (bmi < 18.5) {
    weightStatus = 'UnderWeight'
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healty Weight'
} else if (bmi > 25 && bmi <= 29.9) {
    weightStatus = 'OverWeight'
} else {
    weightStatus = 'Obesity'
}

console.log(weightStatus);