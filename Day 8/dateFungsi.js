//create object date with constructor
const today = new Date() //date() merupakan kelas dan jadikan object agar mendapatkan kelas-kelas date
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDate())

//get info hour minute
const hours = today.getHours()
const minute = today.getMinutes().toString().padStart(2, '0')
console.log(`Jam ${hours} minute ${minute}`)

//create new date with argument
const tomorrow = new Date()
console.log(tomorrow);

//initial date with formed date
const evenDate = new Date()

//adding date
const now = new Date()
const currentDate = now.getDate()
now.setDate(currentDate + 10)
console.log(`tanggal esok ${now}`)

//clone the date
const futureDate = new Date(now.getTime())
//change the cloned date
futureDate.setDate(now.getTime() + 7)