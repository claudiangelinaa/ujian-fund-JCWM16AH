//no2
function no2(){
    let arrNum = []
    let inputAngka = window.prompt(`Masukkan angka`)
    arrNum.push(inputAngka)

    while(!isNaN(inputAngka)){
        inputAngka = window.prompt(`Masukkan angka`)
        arrNum.push(inputAngka)
    }
    arrNum.pop(inputAngka)

    arrNum.sort()
    console.log(arrNum)

    let max = 0
    
    
    for(let i=0; i<arrNum.length; i++){
        if(arrNum[i]>max){
            max = arrNum[i]
        }
    }
        let min = max

    for(let i=0; i<arrNum.length; i++){
        if(arrNum[i]<min){
            min = arrNum[i]
        }
    }

    console.log(`
    Nilai tertinggi = ${max}
    Nilai terendah = ${min}
    `)
}

no2()