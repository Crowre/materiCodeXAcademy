const outputObject = () => {
    let result = {
        statusRespon: 'oke',
        message: 'Data berhasil disimpan'
    }
    // console.log(result)
    return result
}

console.log(outputArray())
let result = outputObject()
console.log(result)

let { statusRespon, message } = outputObject()
// console.log(outputObject())
console.log(statusRespon, message)