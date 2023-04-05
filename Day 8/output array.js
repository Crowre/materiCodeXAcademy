const outputArray = () => {
    let arrStr = ['java', 'script']
    return arrStr
}

console.log(outputArray());
const strArr = outputArray()
console.log(strArr);


//memberi penanda nama awal dan nama akhir di array
//const [namaAwal, namaAkhir] = outputArray()
const [x, y] = outputArray()
console.log(x, y);