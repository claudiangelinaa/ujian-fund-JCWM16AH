function drawingTools() {
    let userOption = document.getElementById("inputJenis").value
    let optionSize = document.getElementById("inputUkuran").value
    let rows = ""
    if (userOption == 1) {
        for (let i = 0; i < optionSize; i++) {
            for (let j = 0; j < optionSize; j++) {
                rows += "*"
            }
            rows += "\n"
        }
    } else if (userOption == 2) {
        for (let i = 0; i < optionSize; i++) {
            for (let j = 0; j <= i; j++) {
                rows += "*"
            }
            rows += "\n"
        }
    } else {
        for (let i = 0; i < optionSize; i++) {
            
            for (let k = 0; k < optionSize - i; k++){
                rows += " "
            }
                
        
            for (let j = 0; j <= i; j++) {
                rows += "*"
            }
        
        rows += "\n"
        }
    }
    console.log(rows)
}
drawingTools()